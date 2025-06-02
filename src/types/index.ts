export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  currency?: string;
  discountedPrice?: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  platforms: string[];
  rating: number;
  coverImage: string;
  screenshots: string[];
  featured?: boolean;
}

export interface CartItem {
  game: Game;
  quantity: number;
}

export interface WishlistItem {
  game: Game;
}

export type Genre = 
  | "Action" 
  | "Adventure" 
  | "RPG" 
  | "Strategy" 
  | "Simulation" 
  | "Sports" 
  | "Racing" 
  | "Puzzle" 
  | "Indie";

export type Platform = "PC" | "PlayStation" | "Xbox" | "Nintendo" | "Mobile";