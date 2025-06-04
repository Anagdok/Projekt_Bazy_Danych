/*
  # Update prices to Polish złoty
  
  1. Changes
    - Update all product prices to PLN
    - Set realistic Polish market prices (150-300 PLN range)
*/

-- Update existing games with Polish prices
UPDATE products
SET price = CASE name
  WHEN 'Cyberpunk 2077' THEN 219.99
  WHEN 'Elden Ring' THEN 269.99
  WHEN 'Red Dead Redemption 2' THEN 199.99
  WHEN 'The Legend of Zelda: Tears of the Kingdom' THEN 299.99
  WHEN 'God of War Ragnarök' THEN 289.99
  WHEN 'Baldur''s Gate 3' THEN 249.99
  WHEN 'Super Gra 1' THEN 229.99
  WHEN 'Super Gra 2' THEN 179.99
  WHEN 'Mystic Quest' THEN 159.99
  WHEN 'Speed Racers' THEN 149.99
  WHEN 'Galaxy Wars' THEN 239.99
  WHEN 'Zombie Survival' THEN 189.99
  WHEN 'Soccer Stars 2025' THEN 259.99
  WHEN 'Farm Life' THEN 169.99
  WHEN 'Puzzle Master' THEN 149.99
  WHEN 'VR Battle Arena' THEN 279.99
  ELSE price
END;