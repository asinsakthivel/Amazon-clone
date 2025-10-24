import Cart from "../models/Cart.js";

// ✅ Get user's cart
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Add or increase product in cart
export const addToCart = async (req, res) => {
  try {
    const { userId, product } = req.body;

    let cart = await Cart.findOne({ userId });
    if (!cart) cart = new Cart({ userId, items: [] });

    const existing = cart.items.find(
      (i) => i.productId === String(product.productId || product.id)
    );

    if (existing) {
      // Increase or overwrite with provided quantity
      existing.quantity = product.quantity || existing.quantity + 1;
      existing.title = product.title || existing.title;
      existing.price = product.price || existing.price;
      existing.originalPrice = product.originalPrice || existing.originalPrice;
      existing.image = product.image || existing.image;
      existing.details = product.details || existing.details;
    } else {
      cart.items.push({
        productId: String(product.productId || product.id),
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        details: product.details,
        quantity: product.quantity || 1,
      });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update product quantity
export const updateQuantity = async (req, res) => {
  try {
    const { userId, productId, action } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.find((i) => i.productId === String(productId));
    if (!item) return res.status(404).json({ error: "Product not in cart" });

    if (action === "increase") item.quantity += 1;
    if (action === "decrease" && item.quantity > 1) item.quantity -= 1;

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error updating quantity:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Remove product
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((i) => i.productId !== String(productId));
    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error("Error removing product:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Clear entire cart
export const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ items: [] });

    cart.items = [];
    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ error: err.message });
  }
};
