import React, { useState } from "react";
import productData from "../productdata";
import "./video.css";
import { useCart } from "../Context/CartContext"; // 🛒 Import Cart Context

function VideoProductSection() {
  const [selectedVideo, setSelectedVideo] = useState(productData[0].video);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { addToCart } = useCart(); // 🟢 Use Cart Context

  const itemsPerPage = 4;
  const totalProducts = productData.length;

  const nextProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

  const prevProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
  };

  // ✅ Handle Add to Cart (using context)
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  // (Optional) Handle Buy Now
  const handleBuyNow = (product) => {
    alert(`Proceeding to checkout for ${product.title}`);
    // navigate("/checkout") or similar
  };

  const visibleProducts = Array.from({ length: itemsPerPage }).map((_, i) => {
    const index = (currentIndex + i) % totalProducts;
    return productData[index];
  });

  return (
    <div className="video-section">
      <h3>Top Girls Collection Dress</h3>

      <div className="video-products-row">
        {/* Video */}
        <div className="video-box">
          <video
            src={selectedVideo}
            autoPlay
            muted
            loop
            playsInline
            className="promo-video"
          />
        </div>

        {/* Product Cards */}
        <div className="products-area">
          <div className="product-slider">
            {visibleProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => product.video && setSelectedVideo(product.video)}
                />
                <div className="product-info">
                  <h6>{product.title}</h6>
                  <p>
                    <span className="price">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                  </p>

                  {/* 🟢 Add to Cart & Buy Buttons */}
                  <div className="product-actions">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="add-btn"
                    >
                       Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="slider-buttons">
            <button onClick={prevProducts} className="nav-btn">
              ← Prev
            </button>
            <button onClick={nextProducts} className="nav-btn">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoProductSection;
