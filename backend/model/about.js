import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    aboutName: {
        type: String,
    }, 
    aboutRole: {
        type: String,
    }, 
    aboutPassword: {
        type: String,
    }, 
    aboutOccupation:{
        type: String
    }, 
    aboutContent:{
        type: String
    },
    aboutPicture:{
        type: String
    }, 
    aboutDateOfBirth:{
        type: Date
    }, 
    aboutAge:{
        type:String
    }, 
    aboutAddress:{
        type: String
    }, 
    aboutEmail:{
        type: String
    }, 
    aboutPhone:{
        type: String
    }, 
    aboutNationality:{
        type: String
    }, 
    aboutStudy:{
        type: String
    }, 
    aboutInterest:{
        type: String
    }, 
    aboutReligion:{
        type:String
    },
    aboutMasterSession:{
        type: String
    }, 
    aboutMasterUniversity:{
        type: String
    }, 
    aboutMasterDegree:{
        type: String
    }, 
    aboutBachelorSession:{
        type:String
    }, 
    aboutBachelorUniversity:{
        type: String
    }, 
    aboutBachelorDegree:{
        type: String
    }, 
    aboutCollegeSession:{
        type: String
    },  
    aboutCollegeCampus:{
        type:String
    }, 
    aboutCollegeDegree:{
        type:String
    }, 
    isEditing:{
        type: Boolean
    },
    createAt:{
        type:Date, 
        default: Date.now
    }

})

const About = mongoose.model("About", aboutSchema)

export default About