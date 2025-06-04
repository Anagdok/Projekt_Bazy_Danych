/*
  # Add promotional deals
  
  1. Changes
    - Add discounted prices for selected games
    - Update release dates for newer games
*/

-- Add discounted prices for selected games
ALTER TABLE products ADD COLUMN IF NOT EXISTS discounted_price decimal(10,2);

UPDATE products
SET discounted_price = CASE name
  WHEN 'Cyberpunk 2077' THEN 159.99
  WHEN 'Red Dead Redemption 2' THEN 129.99
  WHEN 'God of War Ragnarök' THEN 199.99
  ELSE NULL
END;

-- Update release dates for newer games to ensure they appear as new releases
UPDATE products
SET release_date = CASE name
  WHEN 'God of War Ragnarök' THEN '2024-03-15'
  WHEN 'Baldur''s Gate 3' THEN '2024-02-20'
  WHEN 'Cyberpunk 2077' THEN '2024-01-10'
  ELSE release_date
END
WHERE name IN ('God of War Ragnarök', 'Baldur''s Gate 3', 'Cyberpunk 2077');