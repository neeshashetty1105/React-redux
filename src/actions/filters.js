export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const country = (country = '') => ({
    type: 'COUNTRY',
    country
});

export const sortBy = (sortBy) => ({
    type: 'SORT_BY',
    sortBy
});

export const currency = (currency = '') => ({
    type: 'CURRENCY',
    currency
});

const filtersReducerDefaultState = {
   text: '',
    sortBy: '',
    currency:'',
    country:''
};

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});