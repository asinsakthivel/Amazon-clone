import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/amazon-clone")
  .then(() => console.log("✅ MongoDB Connected to amazon-clone"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => res.send("Amazon Clone Backend running..."));

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running at http://localhost:${process.env.PORT || 5000}`)
);
