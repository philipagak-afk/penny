
import express from "express";

import {
  registerUser,
  loginUser,
  getMe
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

// Create the router first
const router = express.Router();

// Registration route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Get currently logged-in user
router.get("/me", authMiddleware, getMe);

export default router;
