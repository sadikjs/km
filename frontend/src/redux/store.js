import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './about/reducer.js';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;