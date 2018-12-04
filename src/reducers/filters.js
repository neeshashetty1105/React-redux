const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    currency:''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'CURRENCY':
            return {
                ...state,
               currency: action.currency


            };
        case 'CLEAR':
            return {
                ...state,
                text: action.defaultFilter.text,
                sortBy: action.defaultFilter.sortBy,
                currency: action.defaultFilter.currency
            };
        default:
            return state;
    }
}