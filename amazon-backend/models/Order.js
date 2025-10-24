import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{ name: String, price: Number, quantity: Number, imgSrc: String }],
  total: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
