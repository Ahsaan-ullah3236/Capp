import pool from "./config/db.js"

// Get all users
export const getAllUsersServices = async () => {
  const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
  return result.rows;
};

// Get single user by ID
export const getUserByIdServices   = async (id) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

// Create new user
export const createUserServices = async (name, email) => {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
};

// Update user
export const updateUserServices = async (id, name, email) => {
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return result.rows[0];
};

// Delete user
export const deleteUserServices = async (id) => {
  await pool.query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );
  return { message: 'User deleted successfully' };
};


