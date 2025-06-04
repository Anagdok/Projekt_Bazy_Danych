/*
  # Update game images with thematic content
  
  1. Changes
    - Update Speed Racers with a motorcycle racing image
    - Update Mystic Quest with a fantasy RPG image
    - Update other generic games with thematic images
*/

UPDATE products
SET cover_image = CASE name
  WHEN 'Speed Racers' THEN 'https://images.pexels.com/photos/2611675/pexels-photo-2611675.jpeg'
  WHEN 'Mystic Quest' THEN 'https://images.pexels.com/photos/6535356/pexels-photo-6535356.jpeg'
  WHEN 'Galaxy Wars' THEN 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg'
  WHEN 'Zombie Survival' THEN 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg'
  WHEN 'Soccer Stars 2025' THEN 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  WHEN 'Farm Life' THEN 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg'
  WHEN 'Puzzle Master' THEN 'https://images.pexels.com/photos/3491940/pexels-photo-3491940.jpeg'
  WHEN 'VR Battle Arena' THEN 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg'
  ELSE cover_image
END
WHERE name IN (
  'Speed Racers',
  'Mystic Quest',
  'Galaxy Wars',
  'Zombie Survival',
  'Soccer Stars 2025',
  'Farm Life',
  'Puzzle Master',
  'VR Battle Arena'
);