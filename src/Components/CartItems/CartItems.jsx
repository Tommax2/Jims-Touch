import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartitems.css";
import removeicon from "../../assets/removeIcon.jpg";
import { ShopContext } from "../../Context/ShopContext";

export const CartItems = () => {
  const {
    All_products,
    cart,
    removeFromCart,
    updateCart,
    isAuthenticated
  } = useContext(ShopContext);

  const navigate = useNavigate();

  // Debug authentication status
  useEffect(() => {
    console.log("Cart component - Auth status:", isAuthenticated);
    console.log("Auth token exists:", !!localStorage.getItem("auth-token"));
  }, [isAuthenticated]);

  // Calculate the total price
  const totalPrice = All_products.reduce((total, product) => {
    const quantity = cart[product.id] || 0;
    const price =
      typeof product.new_price === "string"
        ? product.new_price
        : String(product.new_price || "0");
    return total + quantity * parseFloat(price.replace(/,/g, ""));
  }, 0);

  // Generate WhatsApp link with cart details
  const generateWhatsAppLink = () => {
    const cartItems = All_products
      .filter(product => cart[product.id] > 0)
      .map(product => {
        const quantity = cart[product.id];
        return `${product.name} (${quantity}x): ₦${(
          parseFloat(
            (typeof product.new_price === "string" 
              ? product.new_price 
              : String(product.new_price || "0")
            ).replace(/,/g, "")
          ) * quantity
        ).toLocaleString()}`;
      })
      .join("%0A");

    const message = `Hello, I would like to place an order:%0A${cartItems}%0A%0ATotal: ₦${totalPrice.toLocaleString()}`;
    
    return `https://wa.me/+2348167117816?text=${encodeURIComponent(message)}`;
  };

  const handleCheckout = () => {
    console.log("Checkout clicked, auth status:", isAuthenticated);
    
    if (!isAuthenticated) {
      console.warn("User is not authenticated. Redirecting to login.");
      // Store current location to redirect back after login
      sessionStorage.setItem("redirectAfterLogin", "/cart");
      navigate("/login");
      return;
    }
    
    // User is authenticated, proceed to WhatsApp
    console.log("User is authenticated. Redirecting to WhatsApp.");
    window.location.href = generateWhatsAppLink();
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
        const quantity = cart[e.id] || 0;
        if (quantity > 0) {
          const price =
            typeof e.new_price === "string"
              ? e.new_price
              : String(e.new_price || "0");
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt={`Product image of ${e.name}`}
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <div className="cartitems-quantity-container">
                  <button
                    onClick={() => {
                      updateCart(e.id, quantity - 1);
                    }}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => {
                      updateCart(e.id, quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
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
                  alt="Remove item from cart"
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
              <p>₦{totalPrice.toLocaleString()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>₦{totalPrice.toLocaleString()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};