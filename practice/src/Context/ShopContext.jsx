import React, { createContext, useState } from "react";
import All_products from "../assets/AllProduct/AllProduct";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const updateCart = (id, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: quantity,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        All_products,
        cart,
        updateCart,
        removeFromCart,
        addToCart,
        getTotalCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
