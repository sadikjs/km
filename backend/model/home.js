import mongoose from "mongoose";
const homeSchema = new mongoose.Schema({
    homeRole:{
        type: String
    }, 
    homeTitle:{
        type: String
    }, 
    homeContent:{
        type: String
    }, 
    homePicture:{
        type: String
    }, 
    createAt:{
        type: Date, 
        default: Date.now
    }
})

const Home = mongoose.model ("Home", homeSchema); 
export default Home;