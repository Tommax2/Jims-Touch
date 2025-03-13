import React from "react";
import { useNavigate } from "react-router-dom";
import "./Offers.css";

export const Offers = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/shop"); // Always redirect to shop page
  };

  return (
    <div className="offers">
      <div className="offers-right">
        <div className="executive-offer">
          <h2>Exclusive Offer from Hair and Jim's Touch</h2>
          <p>
            Get 20% off on all Hair and Jim's Touch products. Limited time
            offer!
          </p>
          <button className="offer-button" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
