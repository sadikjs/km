import Home from "../model/home.js"

export const getHome = async(req, res) =>{
    try {
     const homes = await Home.find({}).lean(); 
     res.status(201).json(homes);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

