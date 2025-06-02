import { Game } from '../types';

export const games: Game[] = [
  {
    id: 1,
    title: "Stellar Odyssey",
    description: "Embark on an epic journey through the cosmos. Explore uncharted planets, encounter alien civilizations, and unravel the mysteries of the universe in this immersive open-world space adventure.",
    price: 59.99,
    currency: "zł",
    releaseDate: "2023-11-15",
    developer: "Cosmic Games",
    publisher: "Galaxy Entertainment",
    genres: ["Action", "Adventure", "RPG"],
    platforms: ["PC", "PlayStation", "Xbox"],
    rating: 4.8,
    coverImage: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    featured: true
  },
  {
    id: 2,
    title: "Neon Shadows",
    description: "Navigate through a dystopian cyberpunk city where corporations rule and danger lurks in every shadow. Hack systems, enhance your cybernetic abilities, and choose your allies carefully in this action-packed RPG.",
    price: 49.99,
    discountedPrice: 39.99,
    currency: "zł",
    releaseDate: "2023-08-22",
    developer: "Digital Dreams",
    publisher: "Future Entertainment",
    genres: ["RPG", "Action"],
    platforms: ["PC", "PlayStation", "Xbox"],
    rating: 4.5,
    coverImage: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    featured: true
  },
  {
    id: 3,
    title: "Mythic Legends",
    description: "Enter a world of magic and ancient myths. Build your kingdom, form powerful alliances, and lead your armies to victory in this strategic fantasy game.",
    price: 29.99,
    currency: "zł",
    releaseDate: "2023-05-10",
    developer: "Legendary Studios",
    publisher: "Mythic Games",
    genres: ["Strategy", "RPG"],
    platforms: ["PC", "Mobile"],
    rating: 4.2,
    coverImage: "https://images.pexels.com/photos/3391930/pexels-photo-3391930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3391931/pexels-photo-3391931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  {
    id: 4,
    title: "Velocity Rush",
    description: "Experience the adrenaline of high-speed racing across futuristic cityscapes. Customize your vehicle, master daring maneuvers, and compete against the best racers in the world.",
    price: 39.99,
    currency: "zł",
    releaseDate: "2023-09-30",
    developer: "Speed Demons",
    publisher: "Turbo Entertainment",
    genres: ["Racing", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    rating: 4.4,
    coverImage: "https://images.pexels.com/photos/3273304/pexels-photo-3273304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/5009978/pexels-photo-5009978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  {
    id: 5,
    title: "Puzzle Dimensions",
    description: "Solve mind-bending puzzles that challenge your perception of reality. Manipulate the environment, bend the laws of physics, and discover the hidden secrets of Puzzle Dimensions.",
    price: 19.99,
    discountedPrice: 14.99,
    currency: "zł",
    releaseDate: "2023-07-12",
    developer: "Mind Games",
    publisher: "Puzzle Masters",
    genres: ["Puzzle", "Adventure"],
    platforms: ["PC", "Nintendo", "Mobile"],
    rating: 4.6,
    coverImage: "https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  {
    id: 6,
    title: "Frontier Explorers",
    description: "Discover uncharted territories in this open-world exploration game. Build your outpost, gather resources, and uncover the secrets of a mysterious new planet.",
    price: 44.99,
    currency: "zł",
    releaseDate: "2023-10-05",
    developer: "Pioneer Studios",
    publisher: "Exploration Games",
    genres: ["Adventure", "Simulation", "Strategy"],
    platforms: ["PC", "PlayStation", "Xbox"],
    rating: 4.3,
    coverImage: "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1573919/pexels-photo-1573919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  {
    id: 7,
    title: "Champions Arena",
    description: "Step into the arena and prove your worth in intense PvP battles. Choose your champion, master their abilities, and rise through the ranks to become a legendary competitor.",
    price: 0,
    currency: "zł",
    releaseDate: "2023-04-18",
    developer: "Victory Games",
    publisher: "Champion Entertainment",
    genres: ["Action", "Strategy"],
    platforms: ["PC", "PlayStation", "Xbox", "Mobile"],
    rating: 4.1,
    coverImage: "https://images.pexels.com/photos/3942926/pexels-photo-3942926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/3942926/pexels-photo-3942926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3222808/pexels-photo-3222808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  {
    id: 8,
    title: "Pixel Farmstead",
    description: "Build and manage your dream farm in this relaxing simulation game. Grow crops, raise animals, and create a thriving community in a charming pixel art world.",
    price: 24.99,
    currency: "zł",
    releaseDate: "2023-06-20",
    developer: "Harvest Moon Studios",
    publisher: "Country Life Games",
    genres: ["Simulation", "Indie"],
    platforms: ["PC", "Nintendo", "Mobile"],
    rating: 4.7,
    coverImage: "https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    screenshots: [
      "https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  }
];

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};

export const getGamesByGenre = (genre: string): Game[] => {
  return games.filter(game => game.genres.includes(genre));
};

export const getGamesByPlatform = (platform: string): Game[] => {
  return games.filter(game => game.platforms.includes(platform));
};

export const getGamesBySearch = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(
    game => 
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.developer.toLowerCase().includes(lowercaseQuery) ||
      game.publisher.toLowerCase().includes(lowercaseQuery) ||
      game.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery)) ||
      game.platforms.some(platform => platform.toLowerCase().includes(lowercaseQuery))
  );
};