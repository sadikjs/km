import mongosse from "mongoose"; 

const researchSchema = new mongosse.Schema({
    researchTitle:{
        type:String
    }, 
    researchContent:{
        type: String
    },
    createAt:{
        type:Date, 
        default: Date.now
    }
})

const Research = mongosse.model("Research", researchSchema)
export default Research