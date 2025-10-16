import { HOME_ADDED, HOME_UPDATE } from "./actionTypes.js";

export const getHome = (about)=>{
    return{
        type:HOME_ADDED, 
        payload: about
    }
}

export const homeUpdate = (about) =>{
    return{
        type: HOME_UPDATE, 
        payload: about 
    }
}