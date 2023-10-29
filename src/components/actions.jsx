export const changeMood = (amount) => {
    return {
        type: 'CHANGE_MOOD',
        payload: amount,
    };
};