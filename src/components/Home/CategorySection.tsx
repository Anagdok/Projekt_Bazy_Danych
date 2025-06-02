import React from 'react';
import { Game, Genre } from '../../types';

interface CategorySectionProps {
  genres: Genre[];
  getGamesByGenre: (genre: string) => Game[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ genres, getGamesByGenre }) => {
  // Get first game of each genre for the image
  const getCategoryImage = (genre: string): string => {
    const games = getGamesByGenre(genre);
    return games.length > 0 ? games[0].coverImage : '';
  };

  return (
    <div className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre, index) => (
            <a 
              key={index} 
              href={`/games?genre=${genre}`}
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;