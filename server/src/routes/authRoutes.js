
import express from "express";

import {
  registerUser,
  loginUser,
  getMe
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

// Get currently logged-in user
router.get("/me", authMiddleware, getMe);

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login an existing user
router.post("/login", loginUser);

export default router;
