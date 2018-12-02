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
    sortBy: 'rank',
    currency:'usd'
};

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});