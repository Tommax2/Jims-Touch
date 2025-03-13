import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Updated to useNavigate
import "./Cartitems.css";
import removeicon from "../../assets/removeIcon.jpg";
import { ShopContext } from "../../Context/ShopContext";

export const CartItems = () => {
  const { All_products, cart, removeFromCart, updateCart, isAuthenticated } =
    useContext(ShopContext); // Assume isAuthenticated is provided by ShopContext
  const navigate = useNavigate(); // Updated to useNavigate

  // Calculate the total price
  const totalPrice = All_products.reduce((total, product) => {
    const quantity = cart[product.id] || 0;
    const price =
      typeof product.new_price === "string"
        ? product.new_price
        : String(product.new_price);
    return total + quantity * parseFloat(price.replace(/,/g, ""));
  }, 0);

  // Generate WhatsApp link
  const generateWhatsAppLink = () => {
    return `https://wa.me/message/BPJEWHG2JCFDM1`; // Replace with the actual phone number
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      window.location.href = generateWhatsAppLink(); // Directly navigate to WhatsApp
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title </p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {All_products.map((e) => {
        const quantity = cart[e.id] || 0; // Ensure quantity is a valid number
        if (quantity > 0) {
          const price =
            typeof e.new_price === "string" ? e.new_price : String(e.new_price);
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt={`Product image of ${e.name}`} // Added meaningful alt text
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button
                  className="cartitems-quantity"
                  onClick={() => {
                    updateCart(e.id, quantity + 1);
                  }}
                >
                  {quantity}
                </button>
                <p>
                  ₦
                  {(
                    parseFloat(price.replace(/,/g, "")) * quantity
                  ).toLocaleString()}
                </p>
                <img
                  className="carticon-remove-icon"
                  src={removeicon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove item from cart" // Added meaningful alt text
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>{totalPrice.toLocaleString()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>{totalPrice.toLocaleString()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
