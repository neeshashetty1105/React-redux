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
        netWorth: 14000000000,
        age: "84",
        country: "Australia"
    }],
    filters: {
        text: 'ori',
        sortBy: '',
        currency: ''
    }
};

export default () => {
    return createStore(
        combineReducers({
            celebrities: celebritiesReducer,
            filters: filtersReducer
        }));
};