import React, { useState, useEffect } from 'react';
import GameCard from '../components/Games/GameCard';
import GenreFilter from '../components/Games/GenreFilter';
import PlatformFilter from '../components/Games/PlatformFilter';
import { Genre, Platform, Game } from '../types';
import { Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

const GamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
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
      `);

    if (error) {
      console.error('Error fetching games:', error);
      return;
    }

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
      screenshots: [],
      featured: false
    }));

    setGames(formattedGames);
    setFilteredGames(formattedGames);
  };

  useEffect(() => {
    let result = games;

    if (selectedGenre) {
      result = result.filter(game => game.genres.includes(selectedGenre));
    }

    if (selectedPlatform) {
      result = result.filter(game => game.platforms.includes(selectedPlatform));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(game =>
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.developer.toLowerCase().includes(query) ||
        game.publisher.toLowerCase().includes(query)
      );
    }

    setFilteredGames(result);
  }, [selectedGenre, selectedPlatform, searchQuery, games]);

  const handleGenreSelect = (genre: Genre | null) => setSelectedGenre(genre);
  const handlePlatformSelect = (platform: Platform | null) => setSelectedPlatform(platform);
  const handleSearch = (e: React.FormEvent) => e.preventDefault();

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="md:w-1/4">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Filters</h2>

              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search games..."
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-label="Search"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>

              <GenreFilter selectedGenre={selectedGenre} onSelectGenre={handleGenreSelect} />
              <PlatformFilter selectedPlatform={selectedPlatform} onSelectPlatform={handlePlatformSelect} />

              {(selectedGenre || selectedPlatform || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedGenre(null);
                    setSelectedPlatform(null);
                    setSearchQuery('');
                  }}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition-colors mt-6"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold mb-8">All Games</h1>

            {filteredGames.length === 0 ? (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-xl mb-4">No games found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedGenre(null);
                    setSelectedPlatform(null);
                    setSearchQuery('');
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;