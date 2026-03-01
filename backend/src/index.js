import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoute from "./routes/userRoutes.js" 
import errorHandling from "./middleware/errorHandling.js";
import createUserTable from "./data/creatUserTable.js";


dotenv .config();

const app = express(); 
const port = process.env.PORT || 3001; 

// MiddleWAre 
app.use(express.json());
app.use(cors());


// Routes  
app.use("/api",userRoute)

// Error HAndling middleware 
app.use(errorHandling)


// create table before starting the server 
createUserTable();


// TESting 
app.get("/",async (req, res)=>{
    const result = await pool.query("SELEct Current_DATABASE()");
    res.send(`THE DATAbase name is ${result.rows[0].current_database}`)
})


// server Running 
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})
// for thesting bracnh 
// testing for the new branch 

