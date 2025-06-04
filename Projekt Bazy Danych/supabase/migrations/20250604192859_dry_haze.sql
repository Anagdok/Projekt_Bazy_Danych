/*
  # Update Cyberpunk 2077 image quality
  
  1. Changes
    - Update Cyberpunk 2077's cover image to use the highest quality version
*/

UPDATE products
SET cover_image = 'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/co4yxw.jpg'
WHERE name = 'Cyberpunk 2077';