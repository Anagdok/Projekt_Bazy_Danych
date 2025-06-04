import { Game } from '../types';
import { supabase } from '../lib/supabase';

export const games: Game[] = [];

export const getFeaturedGames = async (): Promise<Game[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres (
        genres (*)
      ),
      product_platforms (
        platforms (*)
      )
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

export const getGameById = async (id: string): Promise<Game | undefined> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres (
        genres (*)
      ),
      product_platforms (
        platforms (*)
      )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching game:', error);
    return undefined;
  }

  return {
    id: data.id,
    title: data.name,
    description: data.description,
    price: data.price,
    releaseDate: data.release_date,
    developer: data.developer,
    publisher: data.publisher,
    rating: data.rating,
    coverImage: data.cover_image,
    genres: data.product_genres.map((pg: any) => pg.genres.name),
    platforms: data.product_platforms.map((pp: any) => pp.platforms.name),
    screenshots: [],
    featured: false
  };
};

export const getGamesByGenre = async (genre: string): Promise<Game[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres (
        genres (*)
      ),
      product_platforms (
        platforms (*)
      )
    `)
    .eq('product_genres.genres.name', genre);

  if (error) {
    console.error('Error fetching games by genre:', error);
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
    featured: false
  }));
};

export const getGamesBySearch = async (query: string): Promise<Game[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_genres (
        genres (*)
      ),
      product_platforms (
        platforms (*)
      )
    `)
    .ilike('name', `%${query}%`);

  if (error) {
    console.error('Error searching games:', error);
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
    featured: false
  }));
};