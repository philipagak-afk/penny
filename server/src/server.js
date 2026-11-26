import authMiddleware from "./middleware/authMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import prisma from "./config/prisma.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use("/api/auth", authRoutes);



// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PennyWise API!",
    status: "Server is running successfully"
  });
});

// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "React successfully connected to PennyWise backend!",
    application: "PennyWise",
    version: "1.0.0"
  });
});

// Protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome! You are authenticated.",
    userId: req.user.userId,
  });
});

const PORT = process.env.PORT || 5000;

// Database connection test
app.get("/api/db-test", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      message: "PennyWise database connected successfully!",
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`PennyWise server running on port ${PORT}`);
});
