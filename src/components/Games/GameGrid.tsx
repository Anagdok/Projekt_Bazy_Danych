import React from 'react';
import GameCard from './GameCard';
import { Game } from '../../types';

interface GameGridProps {
  title: string;
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ title, games }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameGrid;