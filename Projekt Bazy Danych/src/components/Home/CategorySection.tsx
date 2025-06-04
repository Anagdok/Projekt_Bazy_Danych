import React from 'react';
import { Game, Genre } from '../../types';
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  genres: Genre[];
  getGamesByGenre: (genre: string) => Game[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ genres, getGamesByGenre }) => {
  const getCategoryImage = (genre: string): string => {
    const genreGames = getGamesByGenre(genre);
    if (genreGames.length === 0) return '';

    // Map specific games to genres for better representation
    const gameMap: { [key: string]: string } = {
      'Action': 'God of War Ragnarök',
      'Adventure': 'Red Dead Redemption 2',
      'RPG': 'Elden Ring',
      'Strategy': 'Baldur\'s Gate 3',
      'Simulation': 'Farm Life',
      'Sports': 'Soccer Stars 2025',
      'Racing': 'Speed Racers',
      'Puzzle': 'Puzzle Master',
      'Indie': 'Mystic Quest'
    };

    // Try to find the specific game for the genre
    const specificGame = genreGames.find(game => game.title === gameMap[genre]);
    
    // If found, use its image, otherwise use the first game in the genre
    return specificGame ? specificGame.coverImage : genreGames[0].coverImage;
  };

  return (
    <div className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre, index) => (
            <Link 
              key={index} 
              to={`/games?genre=${genre}`}
              className="block relative rounded-lg overflow-hidden group h-40"
            >
              <img 
                src={getCategoryImage(genre)} 
                alt={genre} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">{genre}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;