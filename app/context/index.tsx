
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CourseState } from '../Types/Course.type';


type CartContextType = {
  cart: CourseState[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CourseState[]>([]);

  const addToCart = (product: CourseState): void => {
    setCart([...cart, product]);
    
  };

  const removeFromCart = (productId: string): void => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};