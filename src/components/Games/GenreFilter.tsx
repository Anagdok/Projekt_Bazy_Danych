import React, { useState } from 'react';
import { Genre } from '../../types';

interface GenreFilterProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const genres: Genre[] = [
  "Action", 
  "Adventure", 
  "RPG", 
  "Strategy", 
  "Simulation", 
  "Sports", 
  "Racing", 
  "Puzzle", 
  "Indie"
];

const GenreFilter: React.FC<GenreFilterProps> = ({ onSelectGenre, selectedGenre }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Genres</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectGenre(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedGenre === null
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedGenre === genre
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;