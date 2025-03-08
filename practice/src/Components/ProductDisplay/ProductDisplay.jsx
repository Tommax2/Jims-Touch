import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product?.image} alt="product" />
          <img src={product?.image} alt="product" />
          <img src={product?.image} alt="product" />
          <img src={product?.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product?.image}
            alt="product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className="product-title">{product?.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            {product?.new_price}
          </div>
          <div className="productdisplay-right-price-old">
            {product?.old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Natural and soft, this wig is perfect for any occasion. It is made
          from 100% human hair and is easy to maintain. It is available in
          different colors and lengths.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select inches</h1>
          <div className="productdisplay-right-size-options">
            <div className="productdisplay-right-size-option">12</div>
            <div className="productdisplay-right-size-option">14</div>
            <div className="productdisplay-right-size-option">16</div>
            <div className="productdisplay-right-size-option">18</div>
            <div className="productdisplay-right-size-option">20</div>
            <div className="productdisplay-right-size-option">22</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="add-to-cart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
