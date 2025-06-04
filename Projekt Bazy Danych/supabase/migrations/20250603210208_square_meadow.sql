/*
  # Update users table RLS policies
  
  1. Changes
    - Drop existing policies to avoid conflicts
    - Re-create policies with proper permissions
    - Enable RLS
  
  2. Security
    - Allow public registration
    - Users can only access their own data
    - Users can update their own information
    - Users can delete their own account
*/

-- First drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public user registration" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can delete own account" ON users;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Re-create policies
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

CREATE POLICY "Users can delete own account" 
ON users 
FOR DELETE 
TO authenticated 
USING (auth.uid() = id);