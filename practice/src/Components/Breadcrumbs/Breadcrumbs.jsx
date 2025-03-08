import React from "react";
import "./Breadcrumbs.css";
import { useParams } from "react-router-dom";

export const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <ul className="breadcrumb">
      <li>HOME</li>
      <li>SHOP</li>
      <li>ITEM</li>
      <li>{product?.name ?? "PRODUCT"}</li>
    </ul>
  );
};
