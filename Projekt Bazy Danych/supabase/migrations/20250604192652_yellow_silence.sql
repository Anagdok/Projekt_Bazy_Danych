/*
  # Update Cyberpunk 2077 cover image
  
  1. Changes
    - Update cover image URL for Cyberpunk 2077 to a higher quality version
*/

UPDATE products
SET cover_image = 'https://images.igdb.com/igdb/image/upload/t_original/co4yxw.jpg'
WHERE name = 'Cyberpunk 2077';