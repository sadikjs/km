import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import aboutReducer from './about/reducer.js';
import homeReducer from './home/reducer.js';

const rootReducer = combineReducers({
    home: homeReducer, 
    about: aboutReducer

})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;