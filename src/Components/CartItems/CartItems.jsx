import React, { useContext } from "react";
import "./Cartitems.css";
import removeicon from "../../assets/removeIcon.jpg";
import { ShopContext } from "../../Context/ShopContext";

// Remove AI library import
// import { generateEnhancedMessage } from "../../utils/aiUtils";

export const CartItems = () => {
  const { All_products, cart, removeFromCart, updateCart } =
    useContext(ShopContext);

  // Calculate the total price
  const totalPrice = All_products.reduce((total, product) => {
    const quantity = cart[product.id] || 0;
    const price =
      typeof product.new_price === "string"
        ? product.new_price
        : String(product.new_price);
    return total + quantity * parseFloat(price.replace(/,/g, ""));
  }, 0);

  // Generate WhatsApp message link
  const generateWhatsAppLink = () => {
    const cartDetails = All_products.filter((product) => cart[product.id])
      .map((product) => {
        const quantity = cart[product.id];
        const price =
          typeof product.new_price === "string"
            ? product.new_price
            : String(product.new_price);
        return `${product.name} (x${quantity}) - ₦${(
          parseFloat(price.replace(/,/g, "")) * quantity
        ).toLocaleString()}`;
      })
      .join("\n");
    const message = `I would like to buy the following items:\n\n${cartDetails}\n\nTotal: ₦${totalPrice.toLocaleString()}`;

    // Remove AI-enhanced message generation
    // const enhancedMessage = generateEnhancedMessage(message);

    return `https://wa.me/message/BPJEWHG2JCFDM1?text=${encodeURIComponent(
      message
    )}`;
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
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Proceed to checkout</button>
          </a>
        </div>
      </div>
    </div>
  );
};
