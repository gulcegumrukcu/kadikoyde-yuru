// statsReducer.js
const initialState = {
    mood: 0,
};

const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MOOD':
            return { ...state, mood: Math.max(state.mood + action.payload, 0) };
        default:
            return state;
    }
};

export default statsReducer;
