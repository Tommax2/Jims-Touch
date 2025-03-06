import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import shop from "../../assets/shop.png";
import cart from "../../assets/cart.png"; // Correct path for the cart image

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={shop} alt="shop" />
        <h1>jims</h1>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("wigs");
          }}
        >
          <Link to="/wigs">Wigs</Link>
          {menu === "wigs" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("hair accessories");
          }}
        >
          <Link to="/hair-accessories">Hair accessories</Link>
          {menu === "hair accessories" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="cart" /> {/* Correct path for the cart image */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
