import React, { useState, useEffect } from 'react';
import { Game } from '../../types';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface FeaturedDealProps {
  games: Game[];
}

const FeaturedDeal: React.FC<FeaturedDealProps> = ({ games }) => {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % games.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [games.length]);

  if (!games.length) return null;

  const currentGame = games[currentSlide];
  const discountPercentage = Math.round((1 - currentGame.discountedPrice! / currentGame.price) * 100);
  
  return (
    <div className="bg-gray-900 py-12 special-deal-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl overflow-hidden relative">
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Special Deal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentGame.title}</h2>
            <p className="text-gray-300 mb-6">{currentGame.description}</p>
            
            <div className="flex items-center mb-6">
              <div className="bg-red-500 text-white text-lg font-bold px-3 py-1 rounded-md mr-4">
                {discountPercentage}% OFF
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">{currentGame.discountedPrice} zł</span>
                <span className="text-gray-400 line-through">{currentGame.price} zł</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {currentGame.genres.map((genre, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => addToCart(currentGame)}
              className="flex items-center bg-white text-indigo-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
          </div>
          
          <div className="md:w-1/2 p-4 md:p-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <img 
                src={currentGame.coverImage} 
                alt={currentGame.title} 
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {games.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-4' : 'bg-gray-400'
                    }`}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsTransitioning(true);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }}
                  />
                ))}
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-all"
                aria-label="Previous deal"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-all"
                aria-label="Next deal"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeal;