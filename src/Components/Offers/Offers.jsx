import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Import the authentication context
import "./Offers.css";

export const Offers = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext); // Retrieve login status from context

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
