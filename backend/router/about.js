import express from "express"; 
import {getAbout, updateAbout} from "../controller/aboutController.js"
const router = express.Router(); 

router.get("/about", getAbout)
router.put("/about/:id", updateAbout)


export default router;