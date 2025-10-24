import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: String,
  title: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  cart: [cartItemSchema],
});

export default mongoose.model("User", userSchema);
