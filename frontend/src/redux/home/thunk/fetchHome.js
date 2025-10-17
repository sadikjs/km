import { HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE } from "../actionTypes.js"; 
import axios from "axios";
export const getHome = () =>{
    return (dispatch)=>{
        dispatch({type: HOME_REQUEST})
        axios.get("https://khaledmahmud.com/api/home")
        .then((response)=>{
        dispatch({type: HOME_SUCCESS, payload: response.data})
        })
        .catch((error)=>{
            dispatch({type: HOME_FAILURE, payload: error.message})
        })
    }
}