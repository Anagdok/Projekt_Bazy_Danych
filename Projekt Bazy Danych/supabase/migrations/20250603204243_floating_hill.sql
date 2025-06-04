/*
  # Add authentication and transactions tables
  
  1. New Tables
    - admin_users
      - id (uuid, primary key)
      - username (text, unique)
      - password_hash (text)
      - created_at (timestamptz)
    
    - transactions
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - order_id (uuid, references orders)
      - amount (decimal)
      - status (text)
      - created_at (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  order_id uuid REFERENCES orders(id),
  amount decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Only admins can access admin_users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Only admins can access transactions"
  ON transactions
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Insert admin user (password: admin)
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', '$2a$10$RwxoVt1UHZeCADyFhAPnxOBpO2dQAMRKIR4Y4VZkG4gTvHDQMf9Uy');