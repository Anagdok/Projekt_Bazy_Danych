import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Game } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface HeroProps {
  featuredGame: Game;
}

const Hero: React.FC<HeroProps> = ({ featuredGame }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${featuredGame.coverImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-950/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-xl">
          <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Featured Game
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {featuredGame.title}
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            {featuredGame.description.length > 120 
              ? `${featuredGame.description.substring(0, 120)}...` 
              : featuredGame.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {featuredGame.genres.map((genre, index) => (
              <span 
                key={index} 
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <div className="flex items-center mb-8">
            <div className="mr-4">
              {featuredGame.discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">{featuredGame.discountedPrice} zł</span>
                  <span className="text-gray-400 line-through">{featuredGame.price} zł</span>
                </div>
              ) : (
                <span className="text-2xl font-bold">{featuredGame.price} zł</span>
              )}
            </div>
            <div className="flex items-center text-yellow-400">
              {'★'.repeat(Math.floor(featuredGame.rating))}
              {'☆'.repeat(5 - Math.floor(featuredGame.rating))}
              <span className="ml-1 text-white">({featuredGame.rating})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => addToCart(featuredGame)}
              className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button 
              onClick={() => toggleWishlist(featuredGame)}
              className={`flex items-center ${
                isInWishlist(featuredGame.id) 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-gray-800 hover:bg-gray-700'
              } text-white px-6 py-3 rounded-lg font-medium transition-colors`}
            >
              <Heart className="mr-2" size={20} />
              {isInWishlist(featuredGame.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;