import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Components/Breadcrumbs/Breadcrumbs";
import { ShopContext } from "../Context/ShopContext"; // Import ShopContext
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export const Product = () => {
  const { All_products } = useContext(ShopContext);
  const { productId } = useParams(); // Get the productId from the route parameters
  const product = All_products.find((e) => e.id === Number(productId)); // Corrected Number function
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />{" "}
      {/* Ensure ProductDetails is used correctly */}
      <DescriptionBox />
      <RelatedProducts  />
    </div>
  );
};

export default Product;
