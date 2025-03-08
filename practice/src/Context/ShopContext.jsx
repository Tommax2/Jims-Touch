import React from "react";
import { createContext } from "react";
import All_products from "../assets/AllProduct/AllProduct";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < All_products.length; index++) {
    cart[All_products[index].id] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cart, setCart] = React.useState(getDefaultCart());

  const addToCart = (id) => {
    setCart((prevCart) => {
      return { ...prevCart, [id]: prevCart[id] + 1 };
    });
    console.log(cart);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return { ...prevCart, [id]: prevCart[id] - 1 };
    });
  };

  const contextValue = {
    All_products,
    cart,
    setCart,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
