import pkg from "pg";
import dotenv from "dotenv"
const { Pool }  = pkg;
dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST); 


dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL Connected Successfully");
});

pool.on("error", (err) => {
  console.error("❌ PostgreSQL Connection Error:", err);
  process.exit(1);
});

export default pool;
