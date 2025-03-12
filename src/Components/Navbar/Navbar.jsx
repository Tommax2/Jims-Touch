import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import shop from "../../assets/shop.png";
import cart from "../../assets/cart.png"; // Correct path for the cart image
import { ShopContext } from "../../Context/ShopContext";
import { BiMenu } from "react-icons/bi"; // Importing the toggle icon from Box Icons

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [dropdown, setDropdown] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // State for menu toggle

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={shop} alt="shop" />
        <h1>JIMS</h1>
      </div>
      <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
        <li
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link style={{ textDecoration: "none" }} to="/shop">
            Shop
          </Link>
          {dropdown && (
            <ul className="dropdown-menu">
              <li
                onClick={() => {
                  setMenu("shop");
                  setDropdown(false);
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/shop">
                  Shop
                </Link>
                {menu === "shop" ? <hr /> : null}
              </li>
              <li
                onClick={() => {
                  setMenu("wigs");
                  setDropdown(false);
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
                  setDropdown(false);
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/hair-accessories">
                  Hair accessories
                </Link>
                {menu === "hair accessories" ? <hr /> : null}
              </li>
            </ul>
          )}
        </li>
        {/* Removed the main menu item for Hair accessories */}
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>: <Link to="/login">
          <button>Login</button>
        </Link>}
       
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <BiMenu
        className="nav-toggle-icon"
        onClick={() => setMenuActive(!menuActive)}
      />{" "}
      {/* Adding the toggle icon */}
    </div>
  );
};

export default Navbar;
