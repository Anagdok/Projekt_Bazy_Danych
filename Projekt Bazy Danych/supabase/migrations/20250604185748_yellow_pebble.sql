-- Drop order_items table first (because it references orders)
DROP TABLE IF EXISTS order_items;

-- Drop orders table
DROP TABLE IF EXISTS orders;