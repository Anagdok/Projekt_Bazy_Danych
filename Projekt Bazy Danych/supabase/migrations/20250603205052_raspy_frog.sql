/*
  # Add admin user
  
  1. Changes
    - Add admin user with username 'admin' and password 'admin'
*/

-- Delete existing admin user if exists
DELETE FROM admin_users WHERE username = 'admin';

-- Insert admin user with password 'admin'
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', '$2a$10$3wlxZYBBpcyWzqEGQhkVn.xyJHDnQyPRKYHYv.VpHJ6wjvAZGvZVu');