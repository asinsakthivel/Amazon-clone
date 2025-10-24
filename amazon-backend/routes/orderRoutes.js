import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Place Order
router.post("/place", authMiddleware, async (req, res) => {
  const { userId } = req.body;
  const cart = await Cart.find({ userId });
  if (cart.length === 0) return res.status(400).json({ error: "Cart is empty" });

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  await new Order({ userId, items: cart, total }).save();
  await Cart.deleteMany({ userId });

  res.json({ message: "Order placed successfully" });
});

// ✅ Get User Orders
router.get("/:userId", authMiddleware, async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

export default router;
