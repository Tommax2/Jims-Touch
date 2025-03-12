import React from "react";
import "./RelatedProducts.css";
import data_products from "../../assets/data/popular";
import Item from "../Items/Item";

export const RelatedProducts = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
