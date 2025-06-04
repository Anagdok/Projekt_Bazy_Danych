/*
  # Update game cover images
  
  1. Changes
    - Update cover images for all games with high-quality, thematic images
    - Use IGDB cover images for real games
    - Use thematic Pexels images for fictional games
*/

UPDATE products
SET cover_image = CASE name
  -- Real games with IGDB covers
  WHEN 'Cyberpunk 2077' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4yxw.jpg'
  WHEN 'Elden Ring' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4jni.jpg'
  WHEN 'Red Dead Redemption 2' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1q1f.jpg'
  WHEN 'The Legend of Zelda: Tears of the Kingdom' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vmg.jpg'
  WHEN 'God of War Ragnarök' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5s5v.jpg'
  WHEN 'Baldur''s Gate 3' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co670n.jpg'
  WHEN 'Final Fantasy XVI' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5w3k.jpg'
  WHEN 'Resident Evil 4 Remake' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vx5.jpg'
  WHEN 'Star Wars Jedi: Survivor' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5s5r.jpg'
  WHEN 'Diablo IV' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5s5q.jpg'
  WHEN 'Street Fighter 6' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4yxw.jpg'
  WHEN 'Dead Space Remake' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vng.jpg'
  WHEN 'Hogwarts Legacy' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vxl.jpg'
  WHEN 'Marvel''s Spider-Man 2' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6qhk.jpg'
  WHEN 'Alan Wake 2' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6q8p.jpg'
  WHEN 'Starfield' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6dok.jpg'
  WHEN 'Lies of P' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5v7f.jpg'
  WHEN 'Mortal Kombat 1' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6qh0.jpg'
  WHEN 'Assassin''s Creed Mirage' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5kvr.jpg'
  WHEN 'Lords of the Fallen' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6q8q.jpg'
  WHEN 'Dragon''s Dogma 2' THEN 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6t7n.jpg'
  
  -- Fictional games with thematic Pexels images
  WHEN 'Super Gra 1' THEN 'https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg'
  WHEN 'Super Gra 2' THEN 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  WHEN 'Mystic Quest' THEN 'https://images.pexels.com/photos/6535356/pexels-photo-6535356.jpeg'
  WHEN 'Speed Racers' THEN 'https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg'
  WHEN 'Galaxy Wars' THEN 'https://images.pexels.com/photos/5022456/pexels-photo-5022456.jpeg'
  WHEN 'Zombie Survival' THEN 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg'
  WHEN 'Soccer Stars 2025' THEN 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  WHEN 'Farm Life' THEN 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg'
  WHEN 'Puzzle Master' THEN 'https://images.pexels.com/photos/3491940/pexels-photo-3491940.jpeg'
  WHEN 'VR Battle Arena' THEN 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg'
  ELSE cover_image
END;