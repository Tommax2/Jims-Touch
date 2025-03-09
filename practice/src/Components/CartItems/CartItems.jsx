import React, { useContext } from "react";
import "./Cartitems.css";
import removeicon from "../../assets/removeIcon.jpg";
import { ShopContext } from "../../Context/ShopContext"; // Add this line

export const CartItems = () => {
  const { All_products, cart, removeFromCart, updateCart } =
    useContext(ShopContext);

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
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
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
                <p>  { e.new_price} *{cart [e.id] } </p>{" "}
                {/* Calculate total and cast to string */}
                <img
                className="carticon-remove-icon"
                  src={removeicon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
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
            <h1>carts Total </h1>
            <div>
                <div className="cartitems-total-items">
                    <p> subtotal</p>
                    <p>{0} </p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping fee </p>
                    <p>Free </p>
                </div>
                <hr/>
                <div className="cartitems-total-items">
                    <h3>Total </h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
