import React from "react";
import "./Navbar.css";
import shop from "../../assets/shop.png"; // Adjust the path to the image

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={shop} alt="shop" />
        <h1>jims</h1>
      </div>
        <ul className="nav-menu">
            <li>
                Shop <hr />
        
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={shop} alt="cart" />
            </div>
    </div>
  );
};
