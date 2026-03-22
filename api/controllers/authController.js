import db from "../controllers/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { redirect } from "react-router-dom";

// =====================================
// Register Controller
// =====================================
const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name) return res.status(400).json({ status: false, message: "Name is required", field: "name" });
        if (!email) return res.status(400).json({ status: false, message: "Email is required", field: "email" });
        if (!password) return res.status(400).json({ status: false, message: "Password is required", field: "password" });

        if (password !== confirmPassword) {
            return res.status(400).json({ status: false, message: "Passwords do not match", field: "confirmPassword" });
        }


        // ==========================
        // Check if email exists (active/normal)
        // ==========================
        const [existingActive] = await db.query(
            `SELECT * FROM users WHERE email = ? AND status NOT IN ("inactive", "deleted") LIMIT 1`,
            [email]
        );

        if (existingActive.length > 0) {
            return res.status(400).json({
                status: false,
                message: "Email already exists",
                field: "email"
            });
        }

        // If user exists and is inactive or deleted, delete old user before registering
        const [existingInactive] = await db.query(
            `SELECT * FROM users WHERE email = ? AND status IN ("inactive", "deleted") LIMIT 1`,
            [email]
        );
        if (existingInactive.length > 0) {
            const oldUser = existingInactive[0];
            // Delete from email_verification first (to avoid FK constraint)
            await db.query(`DELETE FROM email_verification WHERE userid = ?`, [oldUser.userid]);
            // Delete the user
            await db.query(`DELETE FROM users WHERE userid = ?`, [oldUser.userid]);
        }

        // ==========================
        // Create new user
        // ==========================
        const userid = randomUUID();
        const createdAt = new Date();
        const loginMethod = "normal";
        const hashed = await bcrypt.hash(password, 10);

        const refreshToken = randomUUID();
        const accessToken = jwt.sign(
            { userid, email },
            process.env.JWT_SECRET,
            { expiresIn: "28d" }
        );
        const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const lastLoginAt = new Date();

        // store in cookies
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false, // change to true if using HTTPS
            expires: refreshTokenExpiresAt
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false, // change to true if using HTTPS
            expires: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000)
        });

        // Insert new user (no ON DUPLICATE KEY UPDATE)
        await db.query(
            `INSERT INTO users 
            (userid, name, email, password, login_method, created_at, refresh_token, access_token, refresh_token_expires_at, last_login_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                userid,
                name,
                email,
                hashed,
                loginMethod,
                createdAt,
                refreshToken,
                accessToken,
                refreshTokenExpiresAt,
                lastLoginAt
            ]
        );

        // ==========================
        // Insert verification key
        // ==========================
        const verificationKey = randomUUID();

        await db.query(
            `INSERT INTO email_verification (userid, verification_key, created_at) 
             VALUES (?, ?, ?)`,
            [userid, verificationKey, createdAt]
        );

        const link = `${process.env.VITE_BACKEND_URL}/api/auth/verify-email?key=${verificationKey}`;
        console.log("Verification link:", link); // remove in production

        return res.json({
            status: true,
            message: "Registration successful. Please check your email to verify your account."
        });

    } catch (err) {
        console.error("Register Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};

// =====================================
// Email Verification Controller
// =====================================
const emailVerification = async (req, res) => {
    try {
        const { key } = req.query;

        if (!key) {
            return res.redirect(process.env.FRONTEND_URL + "/auth/?error=missing_key");
        }

        const [rows] = await db.query(
            `SELECT userid FROM email_verification WHERE verification_key = ? LIMIT 1`,
            [key]
        );

        if (rows.length === 0) {
            return res.redirect(process.env.FRONTEND_URL + "/auth/?error=invalid_key");
        }

        const userid = rows[0].userid;

        // ==========================
        // Activate + cleanup
        // ==========================
        await db.query(
            `UPDATE users SET status = "active", email_verified = 1 WHERE userid = ?`,
            [userid]
        );
        await db.query(
            `DELETE FROM email_verification WHERE verification_key = ?`,
            [key]
        );

        return res.redirect(process.env.FRONTEND_URL + "/auth/?verified=true");

    } catch (err) {
        console.error("Email Verification Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};

// =====================================
// Refresh Token 
// =====================================
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({ status: false, message: "No refresh token provided" });
        }

        const [rows] = await db.query(
            `SELECT userid, email FROM users WHERE refresh_token = ? AND refresh_token_expires_at > NOW() LIMIT 1`,
            [refreshToken]
        );

        if (rows.length === 0) {
            return res.status(401).json({ status: false, message: "Invalid or expired refresh token" });
        }

        const { userid, email } = rows[0];

        // Generate new access token
        const newAccessToken = jwt.sign(
            { userid, email },
            process.env.JWT_SECRET,
            { expiresIn: "28d" }
        );

        // Update access token in database
        await db.query(
            `UPDATE users SET access_token = ? WHERE userid = ?`,
            [newAccessToken, userid]
        );

        // Set new access token cookie
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false, // change to true if using HTTPS
            expires: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000)
        });

        return res.json({ status: true, message: "Access token refreshed" });

    } catch (err) {
        console.error("Refresh Token Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}

// =====================================
// check email verfication status and return redirect url if not verified /verify-email if invaild token /auth/ if verified /profile if verified
// =====================================
const checkEmailVerification = async (req, res) => {
    try {
        const { accessToken } = req.cookies;

        if (!accessToken) {
            return res.json({ status: false, verified: false, redirectUrl: "/auth/" });
        }

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        const userid = decoded.userid;

        const [rows] = await db.query(
            `SELECT email_verified FROM users WHERE userid = ? LIMIT 1`,
            [userid]
        );

        if (rows.length === 0) {
            return res.json({ status: false, verified: false, redirectUrl: "/auth/" });
        }

        const emailVerified = rows[0].email_verified;

        if (!emailVerified) {
            return res.json({ status: true, verified: false, redirectUrl: "/verify-email" });
        }

        return res.json({ status: true, verified: true, redirectUrl: "/" });

    } catch (err) {
        console.error("Check Email Verification Error:", err);
        return res.json({ status: false, verified: false, redirectUrl: "/auth/" });
    }
}


// =====================================

const logout = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        if (refreshToken) {
            await db.query(
                `UPDATE users SET refresh_token = NULL, access_token = NULL WHERE refresh_token = ?`,
                [refreshToken]
            );
        }

        res.clearCookie("refreshToken");
        res.clearCookie("accessToken");
        return res.json({ status: true, message: "Logged out successfully" });
    }
    catch (err) {
        console.error("Logout Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}

const authenticate = async (req, res) => {
    try {
        const { accessToken } = req.cookies;

        if (!accessToken) {
            return res.status(401).json({ status: false, message: "No access token provided" });
        }

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        const userid = decoded.userid;

        const [rows] = await db.query(
            `SELECT userid, email FROM users WHERE userid = ? AND access_token = ? LIMIT 1`,
            [userid, accessToken]
        );

        if (rows.length === 0) {
            return res.status(401).json({ status: false, message: "Invalid access token" });
        }

        return res.json({ status: true, message: "Authenticated", userid: rows[0].userid, email: rows[0].email });

    }
    catch (err) {
        console.error("Authenticate Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};
// forget password 

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ status: false, message: "Email is required" });
        }

        const [rows] = await db.query(`SELECT userid FROM users WHERE email = ? LIMIT 1`, [email]);

        if (rows.length === 0) {
            return res.status(404).json({ status: false, message: "Email not found" });
        }

        const userid = rows[0].userid;
        const resetToken = randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

        await db.query(
            `INSERT into password_resets (userid, reset_token, expires_at) VALUES (?, ?, ?)`,
            [userid, resetToken, expiresAt]
        );

        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
        console.log("Password reset link:", resetLink);

        return res.json({ status: true, message: "Password reset link has been sent to your email" });
    } catch (err) {
        console.error("Forget Password Error:", err);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};


// =====================================
// Exports
// =====================================
export default {
    register,
    emailVerification,
    refreshToken,
    checkEmailVerification
};
