// src/Pages/ProductCart.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductCart.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Checkout handler
  const handleCheckout = () => {
    if (!user) {
      navigate("/signin", { state: { from: "checkout" } });
    } else {
      navigate("/checkout");
    }
  };

  if (!cart.length)
    return (
      <h2 className="text-center mt-5 text-muted fw-bold empty-cart">
        🛒 Your Amazon Cart is empty
      </h2>
    );

  return (
    <div className="container my-4 cart-container">
      <h2 className="mb-4 fw-bold text-center text-amazon">
        🛍️ Shopping Cart
      </h2>

      {/* Product List */}
      <div className="list-group">
        {cart.map((product) => (
          <div
            key={product.productId}
            className="list-group-item d-flex align-items-center cart-item"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="cart-thumb me-3"
            />

            {/* Details */}
            <div className="flex-grow-1">
              <h6 className="mb-1 fw-bold">{product.title}</h6>
              <p className="mb-1 text-muted small">{product.details}</p>

              <div className="d-flex align-items-center price-row">
                <span className="fw-bold text-amazon me-2">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-decoration-line-through text-muted small">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <div className="d-flex align-items-center mt-2 quantity-controls">
                <button
                  className="btn btn-outline-amazon btn-sm"
                  onClick={() => decreaseQuantity(product.productId)}
                >
                  −
                </button>
                <span className="mx-2 fw-bold">{product.quantity}</span>
                <button
                  className="btn btn-outline-amazon btn-sm"
                  onClick={() => increaseQuantity(product.productId)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove button */}
            <button
              className="btn btn-sm btn-remove ms-3"
              onClick={() => removeFromCart(product.productId)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total + Actions */}
      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded shadow-sm cart-summary">
        <h5 className="mb-0">
          Subtotal ({cart.reduce((sum, i) => sum + i.quantity, 0)} items):{" "}
          <span className="text-amazon">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </h5>
        <div>
          <button
            className="btn btn-amazon me-2 checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          <button
            className="btn btn-outline-danger clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
