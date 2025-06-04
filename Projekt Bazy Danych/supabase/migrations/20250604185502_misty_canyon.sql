/*
  # Add orders and order items tables
  
  1. New Tables
    - orders
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - total_amount (numeric)
      - status (text)
      - created_at (timestamptz)
    
    - order_items
      - id (uuid, primary key)
      - order_id (uuid, references orders)
      - product_id (uuid, references products)
      - quantity (integer)
      - price (numeric)
      - created_at (timestamptz)
      
  2. Security
    - Enable RLS on both tables
    - Add policies for user access
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  total_amount numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'completed',
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  price numeric(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for orders
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'orders' 
    AND policyname = 'Users can insert their own orders'
  ) THEN
    CREATE POLICY "Users can insert their own orders"
      ON orders
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'orders' 
    AND policyname = 'Users can view their own orders'
  ) THEN
    CREATE POLICY "Users can view their own orders"
      ON orders
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;

-- Create policies for order_items
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'order_items' 
    AND policyname = 'Users can insert their own order items'
  ) THEN
    CREATE POLICY "Users can insert their own order items"
      ON order_items
      FOR INSERT
      TO authenticated
      WITH CHECK (
        EXISTS (
          SELECT 1 FROM orders
          WHERE orders.id = order_items.order_id
          AND orders.user_id = auth.uid()
        )
      );
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'order_items' 
    AND policyname = 'Users can view their own order items'
  ) THEN
    CREATE POLICY "Users can view their own order items"
      ON order_items
      FOR SELECT
      TO authenticated
      USING (
        EXISTS (
          SELECT 1 FROM orders
          WHERE orders.id = order_items.order_id
          AND orders.user_id = auth.uid()
        )
      );
  END IF;
END $$;