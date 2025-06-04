import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Game, WishlistItem } from '../types';

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (game: Game) => void;
  removeFromWishlist: (gameId: number) => void;
  isInWishlist: (gameId: number) => boolean;
  toggleWishlist: (game: Game) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (game: Game) => {
    setWishlist(prevWishlist => {
      const existingItem = prevWishlist.find(item => item.game.id === game.id);
      
      if (existingItem) {
        return prevWishlist;
      } else {
        return [...prevWishlist, { game }];
      }
    });
  };

  const removeFromWishlist = (gameId: number) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.game.id !== gameId));
  };

  const isInWishlist = (gameId: number) => {
    return wishlist.some(item => item.game.id === gameId);
  };
  
  const toggleWishlist = (game: Game) => {
    if (isInWishlist(game.id)) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      toggleWishlist,
      clearWishlist,
    }}>
      {children}
    </WishlistContext.Provider>
  );
};