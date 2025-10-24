import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarSecondary from "./NavbarSecondary";
import { useCart } from "../Context/CartContext";
import FloatingCartButton from "./FloatingCartButton";

function Header({ onLogout }) {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    onLogout?.();
    navigate("/");
  };

  return (
    <>
      {/* 🔹 Fixed Navbars Wrapper */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        {/* Top Navbar */}
        <header className="bg-dark text-white py-2">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <h4 className="m-0">
              <Link to="/" className="text-white text-decoration-none">
                amazon<span className="text-warning">.in</span>
              </Link>
            </h4>

            {/* Search bar */}
            <input
              className="form-control w-50"
              placeholder="Search Amazon.in"
            />

            {/* Right-side options */}
            <div className="d-flex align-items-center gap-3">
              {storedUser ? (
                <span style={{ cursor: "pointer" }} onClick={handleSignOut}>
                  Hello, {storedUser.name || "User"} <br />
                  <strong>Sign Out</strong>
                </span>
              ) : (
                <Link to="/auth" className="text-white text-decoration-none">
                  Hello, Sign In
                </Link>
              )}

              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/products")}
              >
                Products
              </span>

              <span style={{ cursor: "pointer" }}>Returns & Orders</span>

              {/* Cart */}
              <span
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => navigate("/cart")}
              >
                🛒
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-12px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 7px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </span>
            </div>
          </div>
        </header>

        {/* Secondary Navbar */}
        <div
          style={{
            backgroundColor: "#232f3e",
            borderTop: "1px solid #131921",
            borderBottom: "1px solid #131921",
            padding: "8px 0",
            color:"white",
          }}
        >
          <NavbarSecondary />
        </div>
      </div>

      {/* Push page content down (so it doesn't hide behind navbar) */}
      <div style={{ paddingTop: "120px" }}></div>

      {/* Floating Cart (mobile shortcut) */}
      <FloatingCartButton />
    </>
  );
}

export default Header;
