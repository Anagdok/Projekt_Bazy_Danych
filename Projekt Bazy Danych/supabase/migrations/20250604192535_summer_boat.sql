/*
  # Fix genre relationships
  
  1. Changes
    - Add missing genres
    - Create relationships between games and genres
    - Fix Sports genre relationship for Soccer Stars 2025
*/

-- First, ensure all necessary genres exist
INSERT INTO genres (name)
VALUES 
  ('Action'),
  ('Adventure'),
  ('RPG'),
  ('Strategy'),
  ('Simulation'),
  ('Sports'),
  ('Racing'),
  ('Puzzle')
ON CONFLICT (name) DO NOTHING;

-- Create relationships between games and genres
WITH game_genres AS (
  SELECT 
    p.id as product_id,
    g.id as genre_id
  FROM products p
  CROSS JOIN genres g
  WHERE 
    (p.name = 'Speed Racers' AND g.name = 'Racing') OR
    (p.name = 'Farm Life' AND g.name = 'Simulation') OR
    (p.name = 'Puzzle Master' AND g.name = 'Puzzle') OR
    (p.name = 'Soccer Stars 2025' AND g.name = 'Sports')
)
INSERT INTO product_genres (product_id, genre_id)
SELECT product_id, genre_id FROM game_genres
ON CONFLICT (product_id, genre_id) DO NOTHING;