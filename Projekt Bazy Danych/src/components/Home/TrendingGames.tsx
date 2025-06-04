import React from 'react';
import { Game } from '../../types';
import GameCard from '../Games/GameCard';

interface TrendingGamesProps {
  games: Game[];
}

const TrendingGames: React.FC<TrendingGamesProps> = ({ games }) => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trending Games</h2>
          <a href="/games" className="text-purple-400 hover:text-purple-300 transition-colors">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingGames;