import React from "react";
import "./Breadcrumbs.css";
import { useParams } from "react-router-dom"; // Ensure this import is correct

export const Breadcrumbs = (props) => {
  const { product } = props;
  const { id } = useParams(); // Example usage of useParams

  return (
    <ul className="breadcrumb">
      <li>HOME</li>
      <li>SHOP</li>
      <li>ITEM</li>
      <li>{product?.name ?? "PRODUCT"}</li>
    </ul>
  );
};
