// STORE.js DO NOT DELETE THAT

import { createStore } from 'redux';
import rootReducer from './reducers/index'; // Adjust the path accordingly

const store = createStore(rootReducer);

export default store;