// rootReducer.js
import { combineReducers } from 'redux';
import statsReducer from './statsReducer'; // Adjust the path accordingly

const rootReducer = combineReducers({
    stats: statsReducer,

});

export default rootReducer;