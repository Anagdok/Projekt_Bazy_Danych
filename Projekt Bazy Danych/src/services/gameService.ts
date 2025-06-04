import { supabase } from '../lib/supabase';
import { Game } from '../types';

export const fetchGames = async (): Promise<Game[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres!product_id(genres(*)),
      product_platforms!product_id(platforms(*))
    `);

  if (error) {
    console.error('Error fetching games:', error);
    return [];
  }

  return data.map((product: any) => ({
    id: product.id,
    title: product.name,
    description: product.description,
    price: product.price,
    releaseDate: product.release_date,
    developer: product.developer,
    publisher: product.publisher,
    rating: product.rating,
    coverImage: product.cover_image,
    genres: product.product_genres.map((pg: any) => pg.genres.name),
    platforms: product.product_platforms.map((pp: any) => pp.platforms.name),
    screenshots: [], // You might want to add a screenshots table in Supabase
    featured: false // You might want to add a featured column in Supabase
  }));
};

export const fetchFeaturedGames = async (): Promise<Game[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres!product_id(genres(*)),
      product_platforms!product_id(platforms(*))
    `)
    .order('rating', { ascending: false })
    .limit(2);

  if (error) {
    console.error('Error fetching featured games:', error);
    return [];
  }

  return data.map((product: any) => ({
    id: product.id,
    title: product.name,
    description: product.description,
    price: product.price,
    releaseDate: product.release_date,
    developer: product.developer,
    publisher: product.publisher,
    rating: product.rating,
    coverImage: product.cover_image,
    genres: product.product_genres.map((pg: any) => pg.genres.name),
    platforms: product.product_platforms.map((pp: any) => pp.platforms.name),
    screenshots: [],
    featured: true
  }));
};