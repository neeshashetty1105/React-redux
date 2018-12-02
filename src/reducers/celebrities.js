const celebritiesReducerDefaultState = [];

export default (state = celebritiesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CELEBRITY':
            return [
                ...state,
                action.celebrity
            ];

        default:
            return state;
    }
};