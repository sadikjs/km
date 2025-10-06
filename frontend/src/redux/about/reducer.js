import { ABOUT_ADDED, ABOUT_UPDATE, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS  } from "./actionTypes";
const initialState = {
    abouts:[], 
    loading: false,
    error: null,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, abouts: action.payload };
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ABOUT_ADDED:
            return {
                ...state,
                abouts: [...state.abouts, action.payload]
            }
        case ABOUT_UPDATE:
            return {
                ...state,
                abouts: state.abouts.map((about)=> about._id === action.payload._id ? action.payload : about
                )
            }
        default:
            return state;
    }
};

export default reducer;
