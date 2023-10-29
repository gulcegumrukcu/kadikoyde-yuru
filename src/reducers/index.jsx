// reducers/index.js
import { combineReducers } from 'redux';
import statsReducer from './statsReducer';  // Adjust the file name accordingly

const rootReducer = combineReducers({

    stats: statsReducer,
});

export default rootReducer;