import React from "react";
import { createContext } from "react";
import All_products from "../assets/AllProduct/AllProduct";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

       const contextValue = {All_products};

       return (
              <ShopContext.Provider value={contextValue}>
                     {props.children}
              </ShopContext.Provider>
       );
    }
    export default ShopContextProvider;