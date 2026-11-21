
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PennyWise server running on port ${PORT}`);
});
