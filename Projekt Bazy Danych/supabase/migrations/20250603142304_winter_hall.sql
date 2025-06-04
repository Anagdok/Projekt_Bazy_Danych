/*
  # Add more games and relationships
  
  1. New Data
    - Add more games to products table
    - Create relationships with genres and platforms
*/

-- Add more games
INSERT INTO products (name, price, description, release_date, stock, cover_image, rating, developer, publisher) VALUES
  (
    'Cyberpunk 2077',
    59.99,
    'An open-world action-adventure RPG set in the megalopolis of Night City',
    '2020-12-10',
    500,
    'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    4.5,
    'CD Projekt Red',
    'CD Projekt'
  ),
  (
    'Elden Ring',
    59.99,
    'An action RPG set in a vast open world, developed by FromSoftware',
    '2022-02-25',
    400,
    'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    4.8,
    'FromSoftware',
    'Bandai Namco'
  ),
  (
    'Red Dead Redemption 2',
    49.99,
    'Epic tale of life in America''s unforgiving heartland',
    '2018-10-26',
    300,
    'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    4.9,
    'Rockstar Games',
    'Rockstar Games'
  ),
  (
    'The Legend of Zelda: Tears of the Kingdom',
    69.99,
    'Epic adventure in the kingdom of Hyrule',
    '2023-05-12',
    1000,
    'https://images.pexels.com/photos/7919/pexels-photo.jpg',
    4.9,
    'Nintendo EPD',
    'Nintendo'
  ),
  (
    'God of War Ragnarök',
    59.99,
    'Journey through the Nine Realms in this epic Norse saga',
    '2022-11-09',
    800,
    'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
    4.7,
    'Santa Monica Studio',
    'Sony Interactive Entertainment'
  ),
  (
    'Baldur''s Gate 3',
    59.99,
    'Choose from a wide selection of D&D races and classes in this epic RPG',
    '2023-08-03',
    600,
    'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    4.9,
    'Larian Studios',
    'Larian Studios'
  );

-- Create relationships with genres
INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'Cyberpunk 2077' AND g.name IN ('RPG', 'Action', 'Adventure');

INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'Elden Ring' AND g.name IN ('RPG', 'Action');

INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'Red Dead Redemption 2' AND g.name IN ('Action', 'Adventure');

INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'The Legend of Zelda: Tears of the Kingdom' AND g.name IN ('Action', 'Adventure');

INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'God of War Ragnarök' AND g.name IN ('Action', 'Adventure');

INSERT INTO product_genres (product_id, genre_id)
SELECT p.id, g.id
FROM products p, genres g
WHERE p.name = 'Baldur''s Gate 3' AND g.name IN ('RPG', 'Strategy');

-- Create relationships with platforms
INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'Cyberpunk 2077' AND pl.name IN ('PC', 'PS5', 'Xbox Series X');

INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'Elden Ring' AND pl.name IN ('PC', 'PS5', 'Xbox Series X');

INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'Red Dead Redemption 2' AND pl.name IN ('PC', 'PlayStation 4', 'Xbox One');

INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'The Legend of Zelda: Tears of the Kingdom' AND pl.name IN ('Nintendo Switch');

INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'God of War Ragnarök' AND pl.name IN ('PS5', 'PlayStation 4');

INSERT INTO product_platforms (product_id, platform_id)
SELECT p.id, pl.id
FROM products p, platforms pl
WHERE p.name = 'Baldur''s Gate 3' AND pl.name IN ('PC', 'PS5');