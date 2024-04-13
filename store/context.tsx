'use client';
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  count: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextType>({
  count: 0,
  addToCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

  const addToCart = () => {
      setCount(count + 1);
      console.log(count)
  };

  const contextValue: CartContextType = {
    count,
    addToCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);