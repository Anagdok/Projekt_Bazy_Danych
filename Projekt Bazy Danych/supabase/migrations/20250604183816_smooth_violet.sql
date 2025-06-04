/*
  # Set up authentication tables and policies
  
  1. Changes
    - Enable email auth in Supabase
    - Add test user for authentication testing
*/

-- Insert a test user (email: test@example.com, password: test123)
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'test@example.com',
  crypt('test123', gen_salt('bf')),
  now(),
  now(),
  now()
);