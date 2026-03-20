import express from "express";
import authController from "../../controllers/authController.js";

const router = express.Router();

// ==========================
// Routes
// ==========================
router.post("/register", authController.register);
router.get("/verify-email", authController.emailVerification);
router.post("/refresh-token", authController.refreshToken);
router.get("/check-email-verification", authController.checkEmailVerification);


export default router;
