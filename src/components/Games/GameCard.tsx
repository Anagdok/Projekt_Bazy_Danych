import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Game } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <img 
          src={game.coverImage} 
          alt={game.title} 
          className="w-full h-48 object-cover"
        />
        {game.discountedPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            {Math.round((1 - game.discountedPrice / game.price) * 100)}% OFF
          </div>
        )}
        <button
          onClick={() => toggleWishlist(game)}
          className={`absolute top-2 left-2 p-2 rounded-full ${
            isInWishlist(game.id) ? 'bg-red-500' : 'bg-gray-900 bg-opacity-70'
          } transition-colors`}
          aria-label={isInWishlist(game.id) ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} className={isInWishlist(game.id) ? 'text-white' : 'text-gray-300'} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {game.platforms.slice(0, 3).map((platform, index) => (
            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {platform}
            </span>
          ))}
        </div>
        
        <h3 className="font-bold text-lg mb-1 hover:text-purple-400 transition-colors">
          <a href={`/game/${game.id}`}>{game.title}</a>
        </h3>
        
        <div className="flex items-center text-yellow-400 text-sm mb-2">
          {'★'.repeat(Math.floor(game.rating))}
          {'☆'.repeat(5 - Math.floor(game.rating))}
          <span className="ml-1 text-gray-400">({game.rating})</span>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div>
            {game.discountedPrice ? (
              <div>
                <span className="text-lg font-bold text-white">{game.discountedPrice} zł</span>
                <span className="ml-2 text-sm text-gray-400 line-through">{game.price} zł</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-white">
                {game.price === 0 ? 'Free' : `${game.price} zł`}
              </span>
            )}
          </div>
          
          <button
            onClick={() => addToCart(game)}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;