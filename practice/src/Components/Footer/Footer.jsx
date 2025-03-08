import React from "react";
import "./Footer.css";
import "boxicons"; // Import boxicons

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Jims touch</h1>
        <p>Get the best items from our store at the best prices.</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Offers</li>
          <li>Popular</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <box-icon type="logo" name="whatsapp"></box-icon>
          </li>
          <li>
            <box-icon type="logo" name="tiktok"></box-icon>
          </li>
          <li>
            <box-icon type="logo" name="instagram"></box-icon>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>&copy; 2025 Jims touch. All rights reserved.</p>
      </div>
    </div>
  );
};
