import React from "react";
import "./Offers.css";

export const Offers = () => {
  return (
    <div className="offers">
      {/* Removed the "offers-left" div */}
      <div className="offers-right">
        <div className="executive-offer">
          <h2>Exclusive Offer from Hair and Jim's Touch</h2>
          <p>
            Get 20% off on all Hair and Jim's Touch products. Limited time
            offer!
          </p>
          <button className="offer-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
