import { HOME_FAILURE, HOME_ADDED, HOME_REQUEST, HOME_UPDATE, HOME_SUCCESS } from "./actionTypes.js";
const initialState = {
    homes:[],
    loading:false, 
    error:null
}

const homeReducer = (state=initialState, action) =>{
    switch(action.type){
        case HOME_REQUEST:
            return{
                ...state, loading: true, error: false
            };
        case HOME_SUCCESS:
            return{
                ...state, loading:false, homes:action.payload
            }; 
        case HOME_FAILURE:
            return{
                ...state, loading:false, error:action.payload
            }; 
        case HOME_ADDED:
            return{
                ...state, 
                homes:[...state.homes, action.payload]
            }; 
        case HOME_UPDATE:
            return{
                ...state, 
                homes: state.homes.map(home=>home._id===action.payload._id ? action.payload : home)
            }
        default: 
        return state
    }
}

export default homeReducer; 