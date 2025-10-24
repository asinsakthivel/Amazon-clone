import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function FloatingCartButton() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#ff9900",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        border: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={() => navigate("/cart")}
    >
      🛒
      {cartCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            background: "red",
            color: "#fff",
            borderRadius: "50%",
            padding: "3px 7px",
            fontSize: "12px",
          }}
        >
          {cartCount}
        </span>
      )}
    </button>
  );
}
