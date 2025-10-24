import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../api";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Recalculate total price & count whenever cart changes
  useEffect(() => {
    let total = cart.reduce((sum, item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace(/,/g, ""))
          : item.price;
      return sum + item.quantity * price;
    }, 0);
    setTotalPrice(total);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  // Fetch cart from backend
  const fetchCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    try {
      const res = await axios.get(`${API_URL}/cart/${user.userId}`);
      setCart(res.data.items);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Format product properly before sending
  const formatProduct = (product) => ({
    productId: String(product.id || product.productId),
    title: product.title,
    price:
      typeof product.price === "string"
        ? parseFloat(product.price.replace(/,/g, ""))
        : product.price,
    originalPrice: product.originalPrice,
    image: product.image || product.src, // fallback if src is used
    details: product.details,
    quantity: 1,
  });

  // Add product to cart
  const addToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const formattedProduct = formatProduct(product);

    // Update local cart first
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.productId === formattedProduct.productId
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === formattedProduct.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prev, formattedProduct];
      }
    });

    // Sync with backend
    try {
      await axios.post(`${API_URL}/cart/add`, {
        userId: user.userId,
        product: formattedProduct,
      });
    } catch (err) {
      console.error("Error syncing cart:", err);
    }
  };

  // Increase quantity
  const increaseQuantity = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    setCart((prev) =>
      prev.map((i) =>
        i.productId === String(productId)
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    );

    try {
      await axios.post(`${API_URL}/cart/update`, {
        userId: user.userId,
        productId,
        action: "increase",
      });
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  // Decrease quantity
  const decreaseQuantity = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    setCart((prev) =>
      prev.map((i) =>
        i.productId === String(productId) && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );

    try {
      await axios.post(`${API_URL}/cart/update`, {
        userId: user.userId,
        productId,
        action: "decrease",
      });
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  // Remove product from cart
  const removeFromCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    setCart((prev) => prev.filter((i) => i.productId !== String(productId)));

    try {
      await axios.post(`${API_URL}/cart/remove`, {
        userId: user.userId,
        productId,
      });
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    setCart([]);
    try {
      await axios.post(`${API_URL}/cart/clear`, {
        userId: user.userId,
      });
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
