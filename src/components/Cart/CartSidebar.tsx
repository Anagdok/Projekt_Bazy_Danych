import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

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
              <ShoppingCart className="mr-2" size={20} />
              <h2 className="text-xl font-semibold">Your Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="hover:text-purple-400 transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
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
                          {(item.game.discountedPrice ?? item.game.price)} zł
                        </div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.game.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-l"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center bg-gray-700">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.game.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-r"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.game.id)}
                      className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}

                <div className="mt-4 text-right">
                  <button 
                    onClick={clearCart}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer with total and checkout */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-gray-800">
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Subtotal:</span>
                <span className="font-semibold">{totalPrice.toFixed(2)} zł</span>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-medium transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;