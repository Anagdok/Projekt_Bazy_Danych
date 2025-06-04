/*
  # Fix users table configuration for Supabase Auth

  1. Changes
    - Drop existing users table to avoid conflicts with auth.users
    - Create new users table with correct foreign key relationship
    - Add proper RLS policies for user management
    
  2. Security
    - Enable RLS on users table
    - Add policies for user operations
*/

-- First, safely drop the existing table if it exists
DROP TABLE IF EXISTS users CASCADE;

-- Create the users table with proper configuration
CREATE TABLE public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  auth_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  CONSTRAINT users_auth_id_key UNIQUE (auth_id)
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX users_auth_id_idx ON users(auth_id);
CREATE INDEX users_email_idx ON users(email);
CREATE INDEX users_username_idx ON users(username);

-- Create policies
CREATE POLICY "Users can read own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth_id = auth.uid());

CREATE POLICY "Users can insert own profile"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth_id = auth.uid());

CREATE POLICY "Users can update own profile"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth_id = auth.uid())
  WITH CHECK (auth_id = auth.uid());

CREATE POLICY "Users can delete own profile"
  ON users
  FOR DELETE
  TO authenticated
  USING (auth_id = auth.uid());

-- Create a trigger to automatically create a user profile after signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (email, username, auth_id)
  VALUES (
    NEW.email,
    SPLIT_PART(NEW.email, '@', 1), -- Use email prefix as username
    NEW.id
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();