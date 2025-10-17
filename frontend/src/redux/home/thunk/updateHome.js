import axios from "axios";
import { HOME_UPDATE, HOME_FAILURE } from "../actionTypes.js";
export const updateHome = (formData) => {
   return (dispatch) => {
      fetch(`https://khaledmahmud.com/api/home/${formData._id}`,
         {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         })
         .then(response => response.json())
         .then(data => {
            dispatch({ type: HOME_UPDATE, payload: data });
         })
         .catch((error) => {
            dispatch({ type: HOME_FAILURE, payload: { error: error.message } })
         })
   }
}