import React from "react";
import "./Hero.css";
import handIcon from "../../assets/hello.jpg"; // corrected import
import heroImage from "../../assets/logo.jpg"; // corrected import

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>NEW ARRIVALS ONLY</h1>
        <p>Collection for everyone</p> {/* Restructured collection text */}
        <p className="jims-touch">Jim's Touch</p> {/* Added new text element */}
        <p className="product-description">
          Discover the latest trends and styles with our new arrivals. Perfect
          for every occasion.
        </p>{" "}
        {/* Added product description */}
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
        </div>
      </div>
    </div>
  );
};
