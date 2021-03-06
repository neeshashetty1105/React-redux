import {
    createStore,
    combineReducers
} from "redux";
import celebritiesReducer from '../reducers/celebrities';
import filtersReducer from '../reducers/filters';

const demoState = {
    celebrities: [{
        id: '123abcdefghiklmn',
        name: "Rupert Murdoch",
        currency_type: "USD",
        netWorth: 14000000000,
        age: "84",
        country: "Australia"
    }],
    filters: {
        text: 'jo',
        sortBy: '',
        currency: '',
        country: ''
    }
};

export default () => {
    return createStore(
        combineReducers({
            celebrities: celebritiesReducer,
            filters: filtersReducer
        }));
};