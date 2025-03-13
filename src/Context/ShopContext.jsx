import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [All_products, setAll_Products] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  // Add authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Check for authentication token on component mount
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsAuthenticated(!!token);
    console.log("Auth token found:", !!token);
  }, []);

  useEffect(() => {
    fetch(`${backendUrl}/allproduct`) // Ensure the URL is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data); // Log the fetched data
        setAll_Products(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const addToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
    if (localStorage.getItem("auth-token")) {
      fetch(`${backendUrl}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: itemId, quantity: 1 }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  // Add login and logout functions
  const login = (token) => {
    localStorage.setItem("auth-token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false);
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
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;