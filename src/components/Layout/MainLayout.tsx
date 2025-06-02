import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from '../Cart/CartSidebar';
import WishlistSidebar from '../Wishlist/WishlistSidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
    setIsWishlistOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openWishlist = () => {
    setIsWishlistOpen(true);
    setIsCartOpen(false);
  };

  const closeWishlist = () => {
    setIsWishlistOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar onOpenCart={openCart} onOpenWishlist={openWishlist} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
      
      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={isWishlistOpen} onClose={closeWishlist} />
    </div>
  );
};

export default MainLayout;