import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import dbConnect from "./dbConnect/dbConnect.js";
import aboutRoute from "./router/about.js";

dotenv.config(); 
dbConnect();
const app = express(); 
app.use(cors()); 
app.use(express.json())

app.use("/api", aboutRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT: ${process.env.PORT}`)
})