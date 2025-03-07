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
        <h1>JIMS</h1>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("wigs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/wigs">
            Wigs
          </Link>
          {menu === "wigs" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("hair accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/hair-accessories">
            Hair accessories
          </Link>
          {menu === "hair accessories" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
