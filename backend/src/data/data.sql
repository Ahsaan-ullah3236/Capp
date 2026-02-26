-- ===============================
-- Create Database (Run separately if needed)
-- ===============================
-- CREATE DATABASE crudapp;

-- ===============================
-- Use Database
-- ===============================
-- \c crudapp;

-- ===============================
-- Drop Table if Exists (Safe Reset)
-- ===============================
DROP TABLE IF EXISTS users;

-- ===============================
-- Create Users Table
-- ===============================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===============================
-- Insert Dummy Data
-- ===============================
-- INSERT INTO users (name, email) VALUES
-- ('Ali Khan', 'ali@example.com'),
-- ('Sara Ahmed', 'sara@example.com'),
-- ('Usman Tariq', 'usman@example.com');

-- ===============================
-- View Data
-- ===============================
-- SELECT * FROM users;