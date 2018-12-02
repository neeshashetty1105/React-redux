import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { addCelebrity } from './actions/celebrities';
import { filterText, sortBy, clear } from './actions/filters';
import getVisibleCelebrities from './selectors/celebrities';
import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();

                  store.dispatch(addCelebrity({
                    rank: '02',
                    name: 'John Walton',
                    netWorth: '21000000000',
                    age: '84',
                    country: 'United States'
                  }));
                  store.dispatch(addCelebrity({
                    rank: '01',
                    name: 'Rupert Murdoch',
                    netWorth: '14000000000',
                    age: '60',
                    country: 'Australia'
                  }));



const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(template, document.getElementById('app'));
