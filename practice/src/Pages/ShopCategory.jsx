import React from "react";
import { Link } from "react-router-dom";
import "./Css/ShopCategory.css";
import dropdown_icon from "../assets/dropdown.jpg";
import { Item } from "../Components/Items/Item";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { All_products } = React.useContext(ShopContext);

  const filteredProducts =
    props.category === "wigs"
      ? All_products.slice(0, 10)
      : All_products.slice(10, 20);

  return (
    <div className="shop-category">
      <div className="shopcategory-header">
        <h1>
          {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
        </h1>
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-10</span> out of 20 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-product-grid">
        {filteredProducts.map((item) => (
          <div className="shopcategory-product-item" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt="new-collection"
                className="product-image"
              />
              <p className="product-name">{item.name}</p>
            </Link>
            <div className="item-prices">
              <div className="item-price-new">{item.new_price}</div>
              <div className="item-price-old">{item.old_price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ShopCategory };
