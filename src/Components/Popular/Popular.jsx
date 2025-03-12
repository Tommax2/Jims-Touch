import React, { useEffect, useState } from "react";
import "./Popular.css";
import data_products from "../../assets/data/popular";

import { Item } from "../Items/Item";

export const Popular = () => {
  const [error, setError] = useState(null);
  const [popularProduct, setPopularProduct] = useState(data_products);

  return (
    <div className="popular">
      <div className="popular-heading">
        <h1>Popular Products</h1>
        <p>Check out some of our popular products</p>
      </div>
      {error ? (
        <p className="error">{error}</p>
      ) : popularProduct.length === 0 ? (
        <p className="no-products">No popular products available</p>
      ) : (
        <div className="popular-items">
          {popularProduct.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
