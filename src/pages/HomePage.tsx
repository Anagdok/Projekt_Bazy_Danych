import React from 'react';
import { games, getFeaturedGames, getGamesByGenre } from '../data/games';
import Hero from '../components/Home/Hero';
import TrendingGames from '../components/Home/TrendingGames';
import CategorySection from '../components/Home/CategorySection';
import FeaturedDeal from '../components/Home/FeaturedDeal';
import Newsletter from '../components/Home/Newsletter';
import { Genre } from '../types';

const featuredGames = getFeaturedGames();
const firstFeaturedGame = featuredGames[0];
const dealGame = games.find(game => game.discountedPrice !== undefined);

// Get unique genres from all games
const getUniqueGenres = (): Genre[] => {
  const genreSet = new Set<Genre>();
  games.forEach(game => {
    game.genres.forEach(genre => {
      genreSet.add(genre as Genre);
    });
  });
  return Array.from(genreSet);
};

const HomePage: React.FC = () => {
  const uniqueGenres = getUniqueGenres();
  
  return (
    <div>
      {firstFeaturedGame && <Hero featuredGame={firstFeaturedGame} />}
      <TrendingGames games={games.slice(0, 4)} />
      <CategorySection genres={uniqueGenres} getGamesByGenre={getGamesByGenre} />
      {dealGame && <FeaturedDeal game={dealGame} />}
      <Newsletter />
    </div>
  );
};

export default HomePage;