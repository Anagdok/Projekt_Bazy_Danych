import React, { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import TrendingGames from '../components/Home/TrendingGames';
import CategorySection from '../components/Home/CategorySection';
import FeaturedDeal from '../components/Home/FeaturedDeal';
import Newsletter from '../components/Home/Newsletter';
import { Genre, Game } from '../types';
import { supabase } from '../lib/supabase';

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [dealsGames, setDealsGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames();
    fetchGenres();
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

    // Sort games by release date for featured games
    const sortedByDate = [...formattedGames].sort((a, b) => 
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );

    // Get games with discounts for deals
    const gamesWithDeals = formattedGames.filter(game => game.discountedPrice !== null)
      .sort((a, b) => {
        const discountA = ((a.price - (a.discountedPrice || 0)) / a.price) * 100;
        const discountB = ((b.price - (b.discountedPrice || 0)) / b.price) * 100;
        return discountB - discountA;
      });

    setGames(formattedGames);
    setFeaturedGames(sortedByDate.slice(0, 2));
    setDealsGames(gamesWithDeals.slice(0, 3)); // Get top 3 deals
  };

  const fetchGenres = async () => {
    const { data, error } = await supabase
      .from('genres')
      .select('name');

    if (error) {
      console.error('Error fetching genres:', error);
      return;
    }

    setGenres(data.map(genre => genre.name));
  };

  const getGamesByGenre = (genre: string): Game[] => {
    return games.filter(game => game.genres.includes(genre));
  };
  
  return (
    <div>
      {featuredGames[0] && <Hero featuredGame={featuredGames[0]} />}
      <TrendingGames games={games.slice(0, 4)} />
      {dealsGames.length > 0 && <FeaturedDeal games={dealsGames} />}
      <CategorySection genres={genres} getGamesByGenre={getGamesByGenre} />
      <Newsletter />
    </div>
  );
};

export default HomePage;