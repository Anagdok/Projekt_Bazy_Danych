import React from 'react';
import { Game } from '../../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface FeaturedDealProps {
  game: Game;
}

const FeaturedDeal: React.FC<FeaturedDealProps> = ({ game }) => {
  const { addToCart } = useCart();

  if (!game.discountedPrice) return null;

  const discountPercentage = Math.round((1 - game.discountedPrice / game.price) * 100);
  
  return (
    <div className="bg-gray-900 py-12 special-deal-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Special Deal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{game.title}</h2>
            <p className="text-gray-300 mb-6">{game.description}</p>
            
            <div className="flex items-center mb-6">
              <div className="bg-red-500 text-white text-lg font-bold px-3 py-1 rounded-md mr-4">
                {discountPercentage}% OFF
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">{game.discountedPrice} zł</span>
                <span className="text-gray-400 line-through">{game.price} zł</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {game.genres.map((genre, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => addToCart(game)}
              className="flex items-center bg-white text-indigo-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src={game.coverImage} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeal;