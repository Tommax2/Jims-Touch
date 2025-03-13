import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Ensure this path is correct
import "./Offers.css";

export const Offers = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext); // Retrieve the context

  const isLoggedIn = authContext?.isLoggedIn ?? false; // Safely access isLoggedIn

  const handleShopNowClick = () => {
    if (isLoggedIn) {
      navigate("/shop"); // Redirect to shop page if logged in
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
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
