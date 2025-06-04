import React from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-900 shadow-lg z-50 transform transition-transform ease-in-out duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex items-center">
              <Heart className="mr-2" size={20} />
              <h2 className="text-xl font-semibold">Your Wishlist</h2>
            </div>
            <button 
              onClick={onClose}
              className="hover:text-purple-400 transition-colors"
              aria-label="Close wishlist"
            >
              <X size={24} />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-grow overflow-y-auto p-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Your wishlist is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors"
                >
                  Browse Games
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div key={item.game.id} className="flex border-b border-gray-800 pb-4">
                    <img 
                      src={item.game.coverImage} 
                      alt={item.game.title} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.game.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-purple-400 font-semibold">
                          ${item.game.discountedPrice ?? item.game.price}
                        </div>
                        <button 
                          onClick={() => {
                            addToCart(item.game);
                            removeFromWishlist(item.game.id);
                          }}
                          className="flex items-center text-sm bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded transition-colors"
                        >
                          <ShoppingCart size={14} className="mr-1" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromWishlist(item.game.id)}
                      className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}

                <div className="mt-4 text-right">
                  <button 
                    onClick={clearWishlist}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Clear Wishlist
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistSidebar;