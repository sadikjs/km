import mongoose from "mongoose";
const dbConnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`✅ mongo connect: ${conn.connection.host}`)
    } catch (error) {
        console.error(`❌ error: ${error.message}`)
    }
}

export default dbConnect