import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenWishlist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const scrollToDeals = () => {
    const dealsSection = document.querySelector('.special-deal-section');
    dealsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Improved sizing and fallback */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/crackgrilla-logo.png" 
                  alt="CrackGrilla" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzdlM2U3ZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5DRzwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
              <span className="text-2xl font-bold ml-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                CrackGrilla
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="hover:text-purple-400 transition-colors font-medium">Home</a>
            <a href="/games" className="hover:text-purple-400 transition-colors font-medium">Games</a>
            <button onClick={scrollToDeals} className="hover:text-purple-400 transition-colors font-medium">Deals</button>
            
            {/* Integrated Search in desktop nav */}
            <div className="relative ml-4">
              <button onClick={toggleSearch} className="hover:text-purple-400">
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg p-2">
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      placeholder="Search games..."
                      className="flex-1 p-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button 
                      type="submit" 
                      className="bg-purple-600 px-3 rounded-r-md hover:bg-purple-700"
                    >
                      <Search size={18} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onOpenWishlist}
              className="hover:text-purple-400 transition-colors relative p-1"
              aria-label="Wishlist"
            >
              <Heart size={24} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenCart}
              className="hover:text-purple-400 transition-colors relative p-1"
              aria-label="Cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="hover:text-purple-400 transition-colors p-1">
              <User size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onOpenCart}
              className="hover:text-purple-400 transition-colors relative p-1"
              aria-label="Cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Shows below nav when toggled */}
        {isSearchOpen && !isMenuOpen && (
          <div className="md:hidden mt-3 transition-all duration-300">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search games..."
                className="flex-1 p-3 bg-gray-800 text-white rounded-l-md focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="bg-purple-600 px-4 rounded-r-md hover:bg-purple-700"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-800 rounded-md p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-purple-400 py-2">Home</a>
              <a href="/games" className="hover:text-purple-400 py-2">Games</a>
              <button onClick={scrollToDeals} className="hover:text-purple-400 py-2 text-left">Deals</button>
              
              <div className="pt-3 border-t border-gray-700 flex justify-between">
                <button 
                  onClick={toggleSearch}
                  className="hover:text-purple-400 flex items-center"
                >
                  <Search size={20} className="mr-2" />
                  Search
                </button>
                <button 
                  onClick={onOpenWishlist}
                  className="hover:text-purple-400 flex items-center relative"
                >
                  <Heart size={20} className="mr-2" />
                  Wishlist
                  {wishlist.length > 0 && (
                    <span className="ml-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <button className="hover:text-purple-400 flex items-center">
                  <User size={20} className="mr-2" />
                  Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;