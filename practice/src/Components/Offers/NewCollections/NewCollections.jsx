import React from "react";
import "./NewCollection.css";
import newCollection from "../../../assets/newCollect/NewCollection";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <div className="new-collections-left">
        <div className="new-collection">
          <h2>New Collection</h2>
          <p>
            Get the latest collection of items from our store. Limited stock
            available!
          </p>
        </div>
        {newCollection.map((item) => {
          return (
            <div className="new-collection-item" key={item.id}>
              <img src={item.image} alt="new-collection" />
              <p>{item.name}</p>
              <div className="item-prices">
                <div className="item-price-new">{item.new_price}</div>
                <div className="item-price-old">{item.old_price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
