// src/Pages/ProductPage.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import productData from "../productdata"; // main products
import dealData from "../data";           // deals
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // 🔥 Merge productData + dealData.images into one array
  const combinedProducts = [
    ...productData,
    ...dealData.flatMap((deal) =>
      deal.images.map((item, index) => ({
        id: `${deal.title}-${index}`,   // unique id
        title: deal.title,
        image: item.src,
        price: item.price || "999",     // fallback if no price
        originalPrice: item.originalPrice || "1499",
        details: item.caption || "Special deal product",
      }))
    ),
  ];

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Save the product temporarily so we can add it after login
      localStorage.setItem("pendingCartItem", JSON.stringify(product));
      navigate("/auth");  // redirect to sign in page
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="products-page">
      {/* -------- PAGE TITLE -------- */}
      <h1 className="page-title">Our Products</h1>

      {/* -------- UNIFIED PRODUCT GRID -------- */}
      <div className="product-grid">
        {combinedProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Image */}
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>

            {/* Info */}
            <div className="product-info">
              <span className="product-badge">Best Seller</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.details}</p>

              <div className="product-price-wrapper">
                <span className="product-price">₹{product.price}</span>
                <span className="old-price">₹{product.originalPrice}</span>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={() => handleAddToCart(product)} className="add-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
