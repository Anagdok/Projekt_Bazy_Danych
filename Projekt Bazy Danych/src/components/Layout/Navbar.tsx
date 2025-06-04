import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, User, LogOut, Settings, Package } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Game } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenWishlist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const userMenu = document.getElementById('user-menu');
      if (userMenu && !userMenu.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on location change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim().length >= 2) {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            product_genres (
              genres (name)
            ),
            product_platforms (
              platforms (name)
            )
          `)
          .ilike('name', `%${searchQuery}%`)
          .limit(5);

        if (!error && data) {
          const formattedGames = data.map((product: any) => ({
            id: product.id,
            title: product.name,
            description: product.description,
            price: product.price,
            discountedPrice: product.discounted_price,
            releaseDate: product.release_date,
            developer: product.developer,
            publisher: product.publisher,
            genres: product.product_genres.map((pg: any) => pg.genres.name),
            platforms: product.product_platforms.map((pp: any) => pp.platforms.name),
            rating: product.rating,
            coverImage: product.cover_image,
            screenshots: []
          }));
          setSearchResults(formattedGames);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
      }, 100);
    }
  };

  const toggleUserMenu = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const scrollToDeals = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const dealsSection = document.querySelector('.special-deal-section');
      if (dealsSection) {
        const navbarHeight = 100;
        const elementPosition = dealsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/games?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGameSelect = (gameId: string) => {
    navigate(`/game/${gameId}`);
    setIsSearchOpen(false);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearch(e);
    }
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo crackgrilla.png" 
                alt="CrackGrilla" 
                className="h-20 w-20 object-contain"
              />
              <span className="text-2xl font-bold ml-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                CrackGrilla
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center ${
                location.pathname === '/' ? 'bg-purple-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/games" 
              className={`px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center ${
                location.pathname === '/games' ? 'bg-purple-600' : ''
              }`}
            >
              Games
            </Link>
            <button 
              onClick={scrollToDeals} 
              className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center"
            >
              Deals
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={toggleSearch}
                className={`p-3 ${isSearchOpen ? 'bg-purple-600 rounded-t-lg' : 'hover:bg-purple-600 rounded-lg'} transition-colors`}
                aria-label="Search"
              >
                <Search size={28} />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 mt-0 w-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="p-4 bg-purple-600">
                    <input
                      type="text"
                      placeholder="Search games..."
                      className="w-full p-2 bg-purple-500 text-white placeholder-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-700">
                      {searchResults.map((game) => (
                        <button
                          key={game.id}
                          className="w-full flex items-center p-3 hover:bg-gray-700 transition-colors"
                          onClick={() => handleGameSelect(game.id)}
                        >
                          <img
                            src={game.coverImage}
                            alt={game.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="ml-3 text-left flex-grow">
                            <div className="font-medium text-white">{game.title}</div>
                            <div className="text-sm text-gray-400 mt-1">
                              {game.discountedPrice ? (
                                <>
                                  <span className="text-purple-400 font-semibold">{game.discountedPrice} zł</span>
                                  <span className="ml-2 line-through">{game.price} zł</span>
                                </>
                              ) : (
                                <span>{game.price} zł</span>
                              )}
                            </div>
                          </div>
                          <div className="ml-2 text-purple-400">
                            <Search size={16} />
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery.length >= 2 ? (
                    <div className="p-4 text-center text-gray-400">
                      No games found
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <button 
              onClick={onOpenWishlist}
              className="p-3 hover:bg-purple-600 rounded-lg transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={28} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenCart}
              className="p-3 hover:bg-purple-600 rounded-lg transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={28} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="relative" id="user-menu">
              <button
                onClick={toggleUserMenu}
                className={`p-3 ${isUserMenuOpen ? 'bg-purple-600' : 'hover:bg-purple-600'} rounded-lg transition-colors flex items-center`}
                aria-label="User menu"
              >
                <User size={28} />
              </button>

              {isUserMenuOpen && user && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm text-gray-400">Signed in as</p>
                    <p className="font-medium truncate">{user.email}</p>
                  </div>
                  <Link
                    to="/orders"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Package size={16} className="mr-2" />
                    My Orders
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Settings size={16} className="mr-2" />
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onOpenCart}
              className="p-2 hover:bg-purple-600 rounded-lg transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={28} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 hover:bg-purple-600 rounded-lg transition-colors" 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 transition-all duration-300">
            <div className="flex flex-col space-y-4 text-lg">
              <Link 
                to="/" 
                className={`p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center ${
                  location.pathname === '/' ? 'bg-purple-600' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/games" 
                className={`p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center ${
                  location.pathname === '/games' ? 'bg-purple-600' : ''
                }`}
              >
                Games
              </Link>
              <button 
                onClick={scrollToDeals} 
                className="p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center text-left"
              >
                Deals
              </button>

              {user ? (
                <>
                  <Link
                    to="/orders"
                    className="p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Package size={20} className="mr-2" />
                    My Orders
                  </Link>
                  <Link
                    to="/profile"
                    className="p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center"
                  >
                    <Settings size={20} className="mr-2" />
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center text-red-400"
                  >
                    <LogOut size={20} className="mr-2" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className={`p-3 hover:bg-purple-600 rounded-lg transition-colors flex items-center ${
                    location.pathname === '/login' ? 'bg-purple-600' : ''
                  }`}
                >
                  <User className="mr-2" size={20} />
                  Login
                </Link>
              )}

              <div className="pt-2 border-t border-gray-700">
                <div className="bg-purple-600 p-4 rounded-lg">
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      placeholder="Search games..."
                      className="flex-grow p-2 bg-purple-500 text-white placeholder-purple-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button 
                      type="submit" 
                      className="bg-purple-700 px-4 hover:bg-purple-800 transition-colors rounded-r-lg"
                      aria-label="Submit search"
                    >
                      <Search size={20} />
                    </button>
                  </form>
                </div>

                {searchResults.length > 0 && (
                  <div className="mt-2 divide-y divide-gray-700">
                    {searchResults.map((game) => (
                      <button
                        key={game.id}
                        className="w-full flex items-center p-3 hover:bg-gray-700 rounded transition-colors"
                        onClick={() => handleGameSelect(game.id)}
                      >
                        <img
                          src={game.coverImage}
                          alt={game.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-3 text-left flex-grow">
                          <div className="font-medium text-white">{game.title}</div>
                          <div className="text-sm text-gray-400 mt-1">
                            {game.discountedPrice ? (
                              <>
                                <span className="text-purple-400 font-semibold">{game.discountedPrice} zł</span>
                                <span className="ml-2 line-through">{game.price} zł</span>
                              </>
                            ) : (
                              <span>{game.price} zł</span>
                            )}
                          </div>
                        </div>
                        <div className="ml-2 text-purple-400">
                          <Search size={16} />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="pt-2 border-t border-gray-700 flex space-x-4">
                <button 
                  onClick={onOpenWishlist}
                  className="p-3 hover:bg-purple-600 rounded-lg transition-colors relative"
                  aria-label="Wishlist"
                >
                  <Heart size={28} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
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