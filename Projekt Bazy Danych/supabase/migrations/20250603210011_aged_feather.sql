/*
  # Fix user table RLS policies
  
  1. Changes
    - Drop existing policies to avoid conflicts
    - Recreate policies with proper permissions
    - Ensure RLS is enabled
    
  2. Security
    - Allow public registration
    - Users can only read their own data
    - Users can only update their own data
*/

-- First ensure RLS is enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public user registration" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can read their own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;

-- Create fresh policies
CREATE POLICY "Allow public user registration"
ON users
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
ON users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);