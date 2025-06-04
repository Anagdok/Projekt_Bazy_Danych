/*
  # Add RLS policies for user registration

  1. Security Changes
    - Enable RLS on users table (if not already enabled)
    - Add policy for public user registration
    - Add policy for users to update their own data
    - Add policy for users to read their own data

  2. Notes
    - Allows anonymous users to register new accounts
    - Maintains existing policies for authenticated users
    - Ensures users can only access their own data
*/

-- Enable RLS on users table (if not already enabled)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy for public user registration
CREATE POLICY "Allow public user registration"
ON users
FOR INSERT
TO public
WITH CHECK (true);

-- Policy for users to read their own data
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND policyname = 'Users can read own data'
  ) THEN
    CREATE POLICY "Users can read own data"
    ON users
    FOR SELECT
    TO authenticated
    USING (auth.uid() = id);
  END IF;
END $$;

-- Policy for users to update their own data
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND policyname = 'Users can update own data'
  ) THEN
    CREATE POLICY "Users can update own data"
    ON users
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
  END IF;
END $$;