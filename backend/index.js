import "dotenv/config"; // Shortcut for dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import cookieParser from "cookie-parser";



import authRoutes from "./routes/userRoute.js"; // add .js extension
import tutorialRoutes from "./routes/tutorialRoute.js"

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
// app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tutorial",tutorialRoutes)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
