import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  originalPrice: Number,
  image: String,
  category: String,
  details: String
});

export default mongoose.model("Product", productSchema);
