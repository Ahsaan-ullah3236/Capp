 import pool from "../config/db.js";

const createUserTable = async () => {
  
    const queryText = `
   CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

    `;
  
   try{ 
   await pool.query(queryText);  
   console.log("✅ Users table created successfully (if not exists)");
   }
   catch (error) {
    console.error("❌ Error creating users table:", error);
  }
};

export default createUserTable;