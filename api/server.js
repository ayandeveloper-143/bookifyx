import express from "express";
import helmet from "helmet";
import cors from "cors";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
// Load .env
dotenv.config({ path: path.resolve('../.env') });

const app = express();


// import
import authRouter from "./routes/api/auth.js";

// Security middleware
app.use(helmet());

// CORS setup
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

// Parse middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// CSRF protection
const csrfProtection = csurf({
    cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    },
    value: (req) => {
        // Accept token from custom header or default locations
        return req.headers['x-csrf-token'] || req.body._csrf || req.query._csrf || '';
    }
});

// Origin lock
const allowedHost = process.env.FRONTEND_URL;

function originLock(req, res, next) {
    const origin = req.headers.origin || "";
    const referer = req.headers.referer || "";
    const isDirect = !origin && !referer;

    const isValid =
        origin.includes(allowedHost) ||
        referer.includes(allowedHost);

    if (isDirect || isValid) return next();

    return res.status(403).json({
        status: false,
        message: "Forbidden: Invalid origin",
    });
}

app.use(originLock);

// CSRF error handler (keep global)
app.use((err, req, res, next) => {
    if (err.code === "EBADCSRFTOKEN") {
        return res.status(403).json({
            success: false,
            message: "Invalid CSRF token",
        });
    }
    next(err);
});


// Import routes
import authController from "./controllers/authController.js";

// Routes

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Only apply CSRF protection to this route, not globally
app.get("/api/csrf-token", originLock, (req, res, next) => {
    csurf({
        cookie: {
            httpOnly: false, // allow client JS to read
            sameSite: "lax",
            secure: false,   // match your POST route
        },
    })(req, res, () => {
        res.cookie("csrfToken", req.csrfToken(), {
            httpOnly: false, // allow client JS to read
            sameSite: "lax",
            secure: false,   // match your POST route
        });
        res.json("okay");
    });
});



// Auth API routes: apply CSRF only to POSTs


app.use("/api/auth", authRouter);

// Start server
app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
