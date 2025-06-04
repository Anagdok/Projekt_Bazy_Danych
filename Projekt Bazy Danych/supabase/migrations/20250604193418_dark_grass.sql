/*
  # Add 15 real games
  
  1. Changes
    - Add 15 popular games with proper cover images
    - Set appropriate prices in PLN
    - Add proper descriptions and metadata
*/

-- Insert new games
INSERT INTO products (
  name,
  price,
  discounted_price,
  description,
  release_date,
  developer,
  publisher,
  rating,
  cover_image
) VALUES
  (
    'Final Fantasy XVI',
    299.99,
    NULL,
    'The latest entry in the legendary RPG series featuring a dark fantasy world and action-packed combat.',
    '2023-06-22',
    'Square Enix',
    'Square Enix',
    4.5,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5w3k.jpg'
  ),
  (
    'Resident Evil 4 Remake',
    259.99,
    199.99,
    'A ground-up remake of the survival horror classic, featuring modernized gameplay and stunning visuals.',
    '2023-03-24',
    'Capcom',
    'Capcom',
    4.8,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vx5.jpg'
  ),
  (
    'Star Wars Jedi: Survivor',
    289.99,
    NULL,
    'Continue Cal Kestis''s journey in this action-adventure sequel set in the Star Wars universe.',
    '2023-04-28',
    'Respawn Entertainment',
    'Electronic Arts',
    4.4,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5s5r.jpg'
  ),
  (
    'Diablo IV',
    299.99,
    NULL,
    'Return to darkness with the latest installment in Blizzard''s legendary action RPG series.',
    '2023-06-06',
    'Blizzard Entertainment',
    'Blizzard Entertainment',
    4.6,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5s5q.jpg'
  ),
  (
    'Street Fighter 6',
    249.99,
    NULL,
    'The next evolution of the legendary fighting game series with stunning visuals and new game modes.',
    '2023-06-02',
    'Capcom',
    'Capcom',
    4.7,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4yxw.jpg'
  ),
  (
    'Dead Space Remake',
    259.99,
    189.99,
    'A remake of the sci-fi survival horror classic rebuilt from the ground up.',
    '2023-01-27',
    'Motive Studio',
    'Electronic Arts',
    4.8,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vng.jpg'
  ),
  (
    'Hogwarts Legacy',
    269.99,
    219.99,
    'An immersive, open-world action RPG set in the wizarding world of Harry Potter.',
    '2023-02-10',
    'Avalanche Software',
    'Warner Bros. Games',
    4.5,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vxl.jpg'
  ),
  (
    'Marvel''s Spider-Man 2',
    349.99,
    NULL,
    'The next installment in the acclaimed Spider-Man series featuring both Peter Parker and Miles Morales.',
    '2023-10-20',
    'Insomniac Games',
    'Sony Interactive Entertainment',
    4.9,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6qhk.jpg'
  ),
  (
    'Alan Wake 2',
    269.99,
    NULL,
    'The long-awaited sequel to the psychological thriller, featuring stunning graphics and a gripping narrative.',
    '2023-10-27',
    'Remedy Entertainment',
    'Epic Games',
    4.8,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6q8p.jpg'
  ),
  (
    'Starfield',
    299.99,
    NULL,
    'Bethesda''s first new universe in 25 years, offering an epic space exploration RPG.',
    '2023-09-06',
    'Bethesda Game Studios',
    'Bethesda Softworks',
    4.4,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6dok.jpg'
  ),
  (
    'Lies of P',
    249.99,
    NULL,
    'A souls-like action RPG that reimagines the tale of Pinocchio in a dark, Belle Époque world.',
    '2023-09-19',
    'Neowiz Games',
    'Neowiz Games',
    4.6,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5v7f.jpg'
  ),
  (
    'Mortal Kombat 1',
    289.99,
    NULL,
    'A reboot of the iconic fighting game series featuring stunning visuals and brutal combat.',
    '2023-09-19',
    'NetherRealm Studios',
    'Warner Bros. Games',
    4.5,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6qh0.jpg'
  ),
  (
    'Assassin''s Creed Mirage',
    249.99,
    NULL,
    'Return to the series'' roots in this stealth-focused adventure set in 9th century Baghdad.',
    '2023-10-12',
    'Ubisoft Bordeaux',
    'Ubisoft',
    4.3,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5kvr.jpg'
  ),
  (
    'Lords of the Fallen',
    259.99,
    NULL,
    'A challenging dark fantasy action RPG set in a vast, interconnected world.',
    '2023-10-13',
    'HEXWORKS',
    'CI Games',
    4.2,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6q8q.jpg'
  ),
  (
    'Dragon''s Dogma 2',
    289.99,
    NULL,
    'The long-awaited sequel to the cult classic action RPG featuring deep combat and unique pawn system.',
    '2024-03-22',
    'Capcom',
    'Capcom',
    4.7,
    'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6t7n.jpg'
  );

-- Add genre relationships
WITH game_genres AS (
  SELECT p.id as product_id, g.id as genre_id, p.name as game_name, g.name as genre_name
  FROM products p
  CROSS JOIN genres g
  WHERE 
    (p.name = 'Final Fantasy XVI' AND g.name IN ('RPG', 'Action')) OR
    (p.name = 'Resident Evil 4 Remake' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Star Wars Jedi: Survivor' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Diablo IV' AND g.name IN ('RPG', 'Action')) OR
    (p.name = 'Street Fighter 6' AND g.name IN ('Action')) OR
    (p.name = 'Dead Space Remake' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Hogwarts Legacy' AND g.name IN ('RPG', 'Adventure')) OR
    (p.name = 'Marvel''s Spider-Man 2' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Alan Wake 2' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Starfield' AND g.name IN ('RPG', 'Adventure')) OR
    (p.name = 'Lies of P' AND g.name IN ('RPG', 'Action')) OR
    (p.name = 'Mortal Kombat 1' AND g.name IN ('Action')) OR
    (p.name = 'Assassin''s Creed Mirage' AND g.name IN ('Action', 'Adventure')) OR
    (p.name = 'Lords of the Fallen' AND g.name IN ('RPG', 'Action')) OR
    (p.name = 'Dragon''s Dogma 2' AND g.name IN ('RPG', 'Action'))
)
INSERT INTO product_genres (product_id, genre_id)
SELECT product_id, genre_id FROM game_genres
ON CONFLICT (product_id, genre_id) DO NOTHING;

-- Add platform relationships
WITH game_platforms AS (
  SELECT p.id as product_id, pl.id as platform_id
  FROM products p
  CROSS JOIN platforms pl
  WHERE 
    (p.name = 'Final Fantasy XVI' AND pl.name IN ('PS5')) OR
    (p.name = 'Resident Evil 4 Remake' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Star Wars Jedi: Survivor' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Diablo IV' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Street Fighter 6' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Dead Space Remake' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Hogwarts Legacy' AND pl.name IN ('PS5', 'Xbox Series X', 'PC', 'Nintendo Switch')) OR
    (p.name = 'Marvel''s Spider-Man 2' AND pl.name IN ('PS5')) OR
    (p.name = 'Alan Wake 2' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Starfield' AND pl.name IN ('Xbox Series X', 'PC')) OR
    (p.name = 'Lies of P' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Mortal Kombat 1' AND pl.name IN ('PS5', 'Xbox Series X', 'PC', 'Nintendo Switch')) OR
    (p.name = 'Assassin''s Creed Mirage' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Lords of the Fallen' AND pl.name IN ('PS5', 'Xbox Series X', 'PC')) OR
    (p.name = 'Dragon''s Dogma 2' AND pl.name IN ('PS5', 'Xbox Series X', 'PC'))
)
INSERT INTO product_platforms (product_id, platform_id)
SELECT product_id, platform_id FROM game_platforms
ON CONFLICT (product_id, platform_id) DO NOTHING;