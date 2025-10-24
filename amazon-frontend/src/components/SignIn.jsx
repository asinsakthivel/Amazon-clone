// src/Pages/SignIn.jsx
import React, { useState } from "react";
import axios from "axios";
import API_URL from "../api";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const SignIn = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { cart: localCart, addToCart } = useCart(); // ✅ removed setCart

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        // 👉 Registration flow
        const res = await axios.post(`${API_URL}/auth/register`, {
          name,
          email,
          password,
        });
        alert(res.data.message || "Registration successful");

        // After register → switch to signin
        setIsRegister(false);
        setName("");
        setPassword("");
        return; // stop here
      }

      // 👉 Login flow
      const res = await axios.post(`${API_URL}/auth/login`, { email, password });
      alert(res.data.message);

      if (res.data.token) {
        const userData = {
          name: res.data.name,
          email,
          token: res.data.token,
          userId: res.data.userId,
        };

        // Save user info
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", res.data.token);

        // Lift state up
        onLogin(userData);

        // Fetch backend cart
        let backendCart = [];
        try {
          const cartRes = await axios.get(`${API_URL}/cart/${userData.userId}`, {
            headers: { Authorization: `Bearer ${userData.token}` },
          });
          if (cartRes.data && cartRes.data.items) {
            backendCart = cartRes.data.items;
          }
        } catch (err) {
          console.error("Failed to fetch backend cart:", err);
        }

        // Merge local + backend cart
        const mergedCart = [...backendCart];
        localCart.forEach((localItem) => {
          const existing = mergedCart.find((item) => item.id === localItem.id);
          if (existing) {
            existing.quantity += localItem.quantity;
          } else {
            mergedCart.push(localItem);
          }
        });

        // Update backend
        try {
          await axios.post(
            `${API_URL}/cart/${userData.userId}`,
            {
              items: mergedCart.map((item) => ({
                productId: item.id || item._id,
                quantity: item.quantity,
              })),
            },
            { headers: { Authorization: `Bearer ${userData.token}` } }
          );
        } catch (err) {
          console.error("Failed to update backend cart:", err);
        }

        // ✅ Update context using addToCart
        mergedCart.forEach((item) => addToCart(item));

        // ✅ Handle pending "Add to Cart"
        const pending = sessionStorage.getItem("pendingProduct");
        if (pending) {
          addToCart(JSON.parse(pending));
          sessionStorage.removeItem("pendingProduct");
        }

        // Redirect → product page by default
        const from = location.state?.from || "/products";
        navigate(from, { replace: true });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow-sm">
        <h3 className="text-center mb-4">
          {isRegister ? "Create Account" : "Sign In"}
        </h3>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-warning w-100 mb-3">
            {isRegister ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center">
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Sign In" : "Create one"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
