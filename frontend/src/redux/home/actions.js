import { HOME_ADDED, HOME_UPDATE } from "./actionTypes.js";

export const getHome = (home)=>{
    return{
        type:HOME_ADDED, 
        payload: home
    }
}

export const homeUpdate = (home) =>{
    return{
        type: HOME_UPDATE, 
        payload: home 
    }
}