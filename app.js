import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import dbConnect from "./backend/dbConnect/dbConnect.js";
import aboutRoute from "./backend/router/about.js"; 
import homeRouter from "./backend/router/home.js";

import {dirname, join} from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

dotenv.config(); 
dbConnect();
const app = express(); 
app.use(cors()); 
app.use(express.json())

app.use("/api", aboutRoute)
app.use("/api", homeRouter)

app.use(express.static(join(__dirname, 'frontend', 'dist')));

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT: ${process.env.PORT}`)
})