import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <button className="offer-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
