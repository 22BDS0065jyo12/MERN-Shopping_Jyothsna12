import React, { createContext, useState } from 'react';
import { products as allProducts } from '../assets/assets'; // your product data

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] ? prev[productId] + 1 : 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) updated[productId] -= 1;
      else delete updated[productId];
      return updated;
    });
  };

  const clearCart = () => setCartItems({});

  return (
    <ShopContext.Provider value={{ products: allProducts, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
