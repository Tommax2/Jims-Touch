import React from "react";
import "./Popular.css";
import data_products from "../../assets/data/popular"; // Fixed import path
import { Item } from "../Items/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-heading">
        <h1>Popular Products</h1>
        <p>Check out some of our popular products</p>
      </div>
      <div className="popular-items">
        {data_products.map((item) => {
            return (
                <Item
                key={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            );
        }
          
          
    )}
      </div>
    </div>
  );
};
