import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Game, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
  updateQuantity: (gameId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.game.id === game.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.game.id === game.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { game, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (gameId: number) => {
    setCart(prevCart => prevCart.filter(item => item.game.id !== gameId));
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.game.id === gameId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => {
    const price = item.game.discountedPrice ?? item.game.price;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};