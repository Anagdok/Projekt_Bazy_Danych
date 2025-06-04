/*
  # Initial database schema
  
  1. New Tables
    - products
      - id (uuid, primary key)
      - name (text)
      - price (decimal)
      - description (text)
      - release_date (date)
      - stock (integer)
      - cover_image (text)
      - rating (decimal)
      - developer (text)
      - publisher (text)
      
    - genres
      - id (uuid, primary key)
      - name (text)
      
    - platforms
      - id (uuid, primary key)
      - name (text)
      
    - product_genres
      - product_id (uuid, foreign key)
      - genre_id (uuid, foreign key)
      
    - product_platforms
      - product_id (uuid, foreign key)
      - platform_id (uuid, foreign key)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  description text,
  release_date date,
  stock integer DEFAULT 0,
  cover_image text,
  rating decimal(3,1) DEFAULT 0,
  developer text,
  publisher text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create genres table
CREATE TABLE IF NOT EXISTS genres (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE
);

-- Create platforms table
CREATE TABLE IF NOT EXISTS platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE
);

-- Create junction tables
CREATE TABLE IF NOT EXISTS product_genres (
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  genre_id uuid REFERENCES genres(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, genre_id)
);

CREATE TABLE IF NOT EXISTS product_platforms (
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, platform_id)
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE genres ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_genres ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_platforms ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access on products" ON products
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on genres" ON genres
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on platforms" ON platforms
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on product_genres" ON product_genres
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on product_platforms" ON product_platforms
  FOR SELECT TO public USING (true);