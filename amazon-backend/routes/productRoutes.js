import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
