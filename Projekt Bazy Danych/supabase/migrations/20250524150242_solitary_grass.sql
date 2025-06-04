/*
  # Seed initial data
  
  1. Data Population
    - Insert genres from Gatunki_gier
    - Insert platforms from Platformy
    - Insert products from Produkty with generated cover images
    - Create product relationships
*/

-- Insert genres
INSERT INTO genres (name) VALUES
  ('RPG'),
  ('FPS'),
  ('Strategy'),
  ('MMO'),
  ('Sports'),
  ('Racing'),
  ('Survival'),
  ('Adventure'),
  ('Puzzle'),
  ('Simulation');

-- Insert platforms
INSERT INTO platforms (name) VALUES
  ('PC'),
  ('PS5'),
  ('Xbox Series X'),
  ('Nintendo Switch'),
  ('Android'),
  ('iOS'),
  ('Steam Deck'),
  ('PlayStation 4'),
  ('Xbox One'),
  ('VR');

-- Insert products with generated cover images
INSERT INTO products (name, price, description, release_date, stock, cover_image, rating, developer, publisher) VALUES
  (
    'Super Gra 1',
    59.99,
    'Epicka gra RPG z otwartym światem',
    '2024-03-15',
    100,
    'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    4.5,
    'Epic Games',
    'Epic Publisher'
  ),
  (
    'Super Gra 2',
    49.99,
    'Szybka strzelanka FPS',
    '2023-11-20',
    50,
    'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
    4.2,
    'FPS Studio',
    'Action Games'
  ),
  (
    'Mystic Quest',
    39.99,
    'Przygodowa gra logiczna',
    '2022-07-10',
    200,
    'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    4.7,
    'Puzzle Masters',
    'Adventure Inc'
  ),
  (
    'Speed Racers',
    29.99,
    'Dynamiczne wyścigi arcade',
    '2023-02-18',
    150,
    'https://images.pexels.com/photos/3273304/pexels-photo-3273304.jpeg',
    4.3,
    'Racing Team',
    'Speed Games'
  ),
  (
    'Galaxy Wars',
    69.99,
    'MMO w kosmosie',
    '2024-09-01',
    300,
    'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg',
    4.8,
    'Space Studio',
    'Galaxy Entertainment'
  ),
  (
    'Zombie Survival',
    54.99,
    'Kooperacyjny survival horror',
    '2023-12-12',
    120,
    'https://images.pexels.com/photos/3391930/pexels-photo-3391930.jpeg',
    4.4,
    'Survival Games',
    'Horror Inc'
  ),
  (
    'Soccer Stars 2025',
    59.99,
    'Symulator piłki nożnej',
    '2025-03-02',
    250,
    'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    4.6,
    'Sports Studio',
    'Football Games'
  ),
  (
    'Farm Life',
    24.99,
    'Relaksujący symulator farmy',
    '2021-05-05',
    80,
    'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg',
    4.1,
    'Farm Games',
    'Simulation Inc'
  ),
  (
    'Puzzle Master',
    19.99,
    'Zagadki logiczne',
    '2020-11-11',
    60,
    'https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg',
    4.5,
    'Puzzle Studio',
    'Brain Games'
  ),
  (
    'VR Battle Arena',
    79.99,
    'Strzelanka VR PvP',
    '2024-06-06',
    75,
    'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    4.9,
    'VR Masters',
    'Virtual Games'
  );

-- Create product relationships based on Gatunki_produktu and Platformy_produktu
-- This will be handled by a separate migration to ensure referential integrity