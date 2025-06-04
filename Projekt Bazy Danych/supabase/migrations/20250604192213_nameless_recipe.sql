/*
  # Update game images with higher quality versions
  
  1. Changes
    - Update cover images for real games with higher quality versions
    - Use IGDB's t_1080p format for maximum quality
*/

UPDATE products
SET cover_image = CASE name
  WHEN 'Cyberpunk 2077' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co4yxw.jpg'
  WHEN 'Baldur''s Gate 3' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co670n.jpg'
  WHEN 'Elden Ring' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co4jni.jpg'
  WHEN 'Red Dead Redemption 2' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co1q1f.jpg'
  WHEN 'The Legend of Zelda: Tears of the Kingdom' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co5vmg.jpg'
  WHEN 'God of War Ragnarök' THEN 'https://images.igdb.com/igdb/image/upload/t_1080p/co5s5v.jpg'
  ELSE cover_image
END
WHERE name IN (
  'Cyberpunk 2077',
  'Baldur''s Gate 3',
  'Elden Ring',
  'Red Dead Redemption 2',
  'The Legend of Zelda: Tears of the Kingdom',
  'God of War Ragnarök'
);