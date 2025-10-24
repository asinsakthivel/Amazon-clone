import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press Releases</a></li>
            <li><a href="/science">Amazon Science</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="/sell">Sell on Amazon</a></li>
            <li><a href="/affiliate">Affiliate Program</a></li>
            <li><a href="/advertise">Advertise Your Products</a></li>
            <li><a href="/fba">Fulfilment by Amazon</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="/covid">COVID-19 and Amazon</a></li>
            <li><a href="/account">Your Account</a></li>
            <li><a href="/returns">Returns Centre</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amazon Clone by Asin Sakthivel</p>
      </div>
    </footer>
  );
}

export default Footer;
