import React from "react";

export const Product = () => {
  const { All_products } = useContext(ShopContext);
  const { prodctId } = useParams();
  const product = All_products.find((e) => e.id === number(prodctId));
  return
   <div>

  </div>;
};
