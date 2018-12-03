export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const sortBy = (sortBy) => ({
    type: 'SORT_BY',
    sortBy
});

export const currency = (currency = '') => ({
    type: 'CURRENCY_TYPE',
    currency
});

const filtersReducerDefaultState = {
   text: '',
    sortBy: '',
    currency:''
};

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});