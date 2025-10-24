import React from "react";
import { Link } from "react-router-dom";
import dealData from "../data";
import "./DealsSection.css";

function DealsSection() {
  return (
    <div className="deals-wrapper">
      {dealData.map((deal) => (
        <div key={deal.title} className="deal-card">
          <h3 className="deal-title">{deal.title}</h3>
          <div className="deal-images">
            {deal.images.map((item) => (
              <div key={item.id} className="deal-image-item">
                <Link to={`/productcart?category=${encodeURIComponent(deal.title)}`}>
                  <img src={item.src} alt={item.caption} loading="lazy" />
                </Link>
                <p className="image-caption">{item.caption}</p>
              </div>
            ))}
          </div>
          <Link to={`/products?category=${encodeURIComponent(deal.title)}`} className="see-all-link">
            See all offers
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DealsSection;
