import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-nevagator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(100)</div>
      </div>
      <div className="descriptionbox-descriptions">
        <p>
          Jims Touch is a premium hair brand, renowned for providing luxury hair
          and exquisite hair accessories. With a commitment to quality, style,
          and elegance, Jims Touch offers a curated selection of the finest hair
          extensions, wigs, and accessories, all designed to help you achieve a
          flawless and luxurious look. Our mission is to help you express your
          unique beauty and confidence through luxury hairs.
        </p>
      </div>
    </div>
  );
};
