import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Calendar, Award, User, Building, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { supabase } from '../lib/supabase';

const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const fetchGame = async () => {
      try {
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
          .eq('id', id)
          .single();

        if (error) throw error;

        const formattedGame = {
          id: data.id,
          title: data.name,
          description: data.description,
          price: data.price,
          discountedPrice: data.discounted_price,
          releaseDate: data.release_date,
          developer: data.developer,
          publisher: data.publisher,
          genres: data.product_genres.map((pg: any) => pg.genres.name),
          platforms: data.product_platforms.map((pp: any) => pp.platforms.name),
          rating: data.rating,
          coverImage: data.cover_image,
          screenshots: []
        };

        setGame(formattedGame);
        setActiveImage(formattedGame.coverImage);
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading game details...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <p className="mb-8">Sorry, the game you're looking for doesn't exist.</p>
        <a href="/games" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
          Browse Games
        </a>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(game);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(game);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="lg:w-2/5">
            <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
              <img 
                src={activeImage} 
                alt={game.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <button 
                onClick={() => setActiveImage(game.coverImage)}
                className={`rounded-lg overflow-hidden border-2 ${activeImage === game.coverImage ? 'border-purple-500' : 'border-transparent'}`}
              >
                <img 
                  src={game.coverImage} 
                  alt={`${game.title} cover`} 
                  className="w-full h-20 object-cover"
                />
              </button>
              
              {game.screenshots?.map((screenshot: string, index: number) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(screenshot)}
                  className={`rounded-lg overflow-hidden border-2 ${activeImage === screenshot ? 'border-purple-500' : 'border-transparent'}`}
                >
                  <img 
                    src={screenshot} 
                    alt={`${game.title} screenshot ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Details */}
          <div className="lg:w-3/5">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{game.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {game.genres?.map((genre: string, index: number) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-400 mr-4">
                {'★'.repeat(Math.floor(game.rating))}
                {'☆'.repeat(5 - Math.floor(game.rating))}
                <span className="ml-1 text-white">({game.rating})</span>
              </div>
              <div className="text-gray-400">
                Released: {formatDate(game.releaseDate)}
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {game.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">Release Date</span>
                </div>
                <div className="font-medium">{formatDate(game.releaseDate)}</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center text-gray-400 mb-2">
                  <User size={16} className="mr-2" />
                  <span className="text-sm">Developer</span>
                </div>
                <div className="font-medium">{game.developer}</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center text-gray-400 mb-2">
                  <Building size={16} className="mr-2" />
                  <span className="text-sm">Publisher</span>
                </div>
                <div className="font-medium">{game.publisher}</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center text-gray-400 mb-2">
                  <Star size={16} className="mr-2" />
                  <span className="text-sm">Rating</span>
                </div>
                <div className="font-medium">{game.rating} / 5</div>
              </div>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="mr-4">
                {game.discountedPrice ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold mr-2">{game.discountedPrice} zł</span>
                    <span className="text-gray-400 line-through">{game.price} zł</span>
                    <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                      {Math.round((1 - game.discountedPrice / game.price) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">
                    {game.price === 0 ? 'Free' : `${game.price} zł`}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </button>
              <button 
                onClick={handleToggleWishlist}
                className={`flex items-center ${
                  isInWishlist(game.id) 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white px-6 py-3 rounded-lg font-medium transition-colors`}
              >
                <Heart className="mr-2" size={20} />
                {isInWishlist(game.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
            
            {/* Platforms */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Available on</h3>
              <div className="flex flex-wrap gap-2">
                {game.platforms?.map((platform: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-white px-4 py-2 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;