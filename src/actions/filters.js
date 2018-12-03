export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const sortBy = (sortType) => ({
    type: 'SORT_BY',
    sortType
});

export const updateCurrency = (currency = '') => ({
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