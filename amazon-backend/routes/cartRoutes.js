import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getCart);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.post("/clear", clearCart);
router.post("/update", updateQuantity);

export default router;
