import Home from "../model/home.js"

export const getHome = async(req, res) =>{
    try {
     const homes = await Home.find({}).lean(); 
     res.status(201).json(homes);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const homeUpdate = async(req, res)=>{
    const {id} = req.params; 
    const {homeTitle, homeContent} = req.body
    try {
        const home = await Home.findByIdAndUpdate(id, {homeTitle, homeContent}, {new: true})
        if(!home){
            res.status(400).json({error: "data not found"})
        }
        res.status(200).json(home)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}