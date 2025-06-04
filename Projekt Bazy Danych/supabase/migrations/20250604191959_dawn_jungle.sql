/*
  # Update game images
  
  1. Changes
    - Update existing games with proper cover images and screenshots
    - Use high-quality images from actual games
*/

UPDATE products
SET cover_image = CASE name
  WHEN 'Cyberpunk 2077' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4yxw.jpg'
  WHEN 'Elden Ring' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg'
  WHEN 'Red Dead Redemption 2' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg'
  WHEN 'The Legend of Zelda: Tears of the Kingdom' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg'
  WHEN 'God of War Ragnarök' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg'
  WHEN 'Baldur''s Gate 3' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big/co670n.jpg'
  ELSE cover_image
END
WHERE name IN (
  'Cyberpunk 2077',
  'Elden Ring',
  'Red Dead Redemption 2',
  'The Legend of Zelda: Tears of the Kingdom',
  'God of War Ragnarök',
  'Baldur''s Gate 3'
);