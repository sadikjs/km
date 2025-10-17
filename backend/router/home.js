import express from "express"; 
import { getHome, homeUpdate} from "../controller/homeController.js";
const router = express.Router(); 

router.get("/home", getHome)
router.put("/home/:id", homeUpdate)

export default router; 