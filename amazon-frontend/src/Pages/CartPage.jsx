// src/pages/CartPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login first to view your cart.");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ adjust based on backend response
        setCart(res.data.cart || res.data);
      } catch (err) {
        console.error(err);
        alert("Please login first to view your cart.");
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `http://localhost:5000/api/cart/remove/${id}`, // ✅ confirm backend route
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCart(res.data.cart || res.data);
      localStorage.setItem("cartCount", (res.data.cart || res.data).length);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
    }
  };

  const getTotal = () =>
    cart.reduce(
      (acc, item) =>
        acc + (item.quantity || 1) * parseInt(item.price.replace("₹", "").replace(",", "")),
      0
    );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p className="cart-price">{item.price}</p>
                  <p>Qty: {item.quantity || 1}</p>
                  <button className="btn-remove" onClick={() => handleRemove(item._id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Subtotal ({cart.length} items): ₹{getTotal()}</h3>
            <button className="btn-checkout">Proceed to Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
