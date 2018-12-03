import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import {
    addCelebrity
} from './actions/celebrities';
import {
    filterText,
    sortBy,
    currency
} from './actions/filters';
import getVisibleCelebrities from './selectors/celebrities';
import './styles/styles.scss';

import {
    Provider
} from 'react-redux';

const store = getAppStore();

            store.dispatch(addCelebrity({
              rank: 1,
              name: 'John Walton',
              currency_type:'USD',
              netWorth: '21000000000',
              age: '68',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 2,
              name: 'Rupert Murdoch',
              currency_type:'USD',
              netWorth: '14000000000',
              age: '84',
              country: 'Australia'
            }));
            store.dispatch(addCelebrity({
              rank: 3,
              name: 'Donald Newhouse',
              currency_type:'USD',
              netWorth: '8400000000',
              age: '85',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 4,
              name: 'Ralph Lauren',
              currency_type:'USD',
              netWorth: '7100000000',
              age: '75',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 5,
              name: 'Dina Merrill',
              currency_type:'USD',
              netWorth: '5100000000',
              age: '91',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 6,
              name: 'George Lucas',
              currency_type:'USD',
              netWorth: '4900000000',
              age: '70',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 7,
              name: 'James Packer',
              currency_type:'USD',
              netWorth: '4400000000',
              age: '50',
              country: 'Australia'
            }));
            store.dispatch(addCelebrity({
              rank: 8,
              name: 'Sumner Redstone',
              currency_type:'USD',
              netWorth: '4400000000',
              age: '91',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 9,
              name: 'Arnon Milchan',
              currency_type:'USD',
              netWorth: '3800000000',
              age: '70',
              country: 'Israel'
            }));
            store.dispatch(addCelebrity({
              rank: 10,
              name: 'Patrizio Bertelli',
              currency_type:'USD',
              netWorth: '3700000000',
              age: '64',
              country: 'Italy'
            }));
            store.dispatch(addCelebrity({
              rank: 11,
              name: 'Barbara Piasecka Johnson',
              currency_type:'USD',
              netWorth: '3600000000',
              age: '78',
              country: 'Poland'
            }));
            store.dispatch(addCelebrity({
              rank: 12,
              name: 'Steven Spielberg',
              currency_type:'USD',
              netWorth: '3500000000',
              age: '68',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 13,
              name: 'Kalanithi Maran',
              currency_type:'USD',
              netWorth: '3300000000',
              age: '51',
              country: 'India'
            }));
            store.dispatch(addCelebrity({
              rank: 14,
              name: 'Oprah Winfrey',
              currency_type:'USD',
              netWorth: '3000000000',
              age: '61',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 15,
              name: 'Julia Louis-Dreyfus',
              currency_type:'USD',
              netWorth: '3000000000',
              age: '54',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 16,
              name: 'Haim Saban',
              currency_type:'USD',
              netWorth: '2900000000',
              age: '70',
              country: 'Israel'
            }));
            store.dispatch(addCelebrity({
              rank: 17,
              name: 'Joao Moreira Salles',
              currency_type:'USD',
              netWorth: '2700000000',
              age: '53',
              country: 'Brazil'
            }));
            store.dispatch(addCelebrity({
              rank: 18,
              name: 'Indu Jain',
              currency_type:'USD',
              netWorth: '2600000000',
              age: '78',
              country: 'India'
            }));
            store.dispatch(addCelebrity({
              rank: 19,
              name: 'Davis Guggenheim',
              currency_type:'USD',
              netWorth: '2500000000',
              age: '51',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 20,
              name: 'Mort Zuckerman',
              currency_type:'USD',
              netWorth: '2400000000',
              age: '77',
              country: 'Canada'
            }));
            store.dispatch(addCelebrity({
              rank: 21,
              name: 'Ted Turner',
              currency_type:'USD',
              netWorth: '2300000000',
              age: '76',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 22,
              name: 'Stanley Perron',
              currency_type:'USD',
              netWorth: '2100000000',
              age: '92',
              country: 'Australia'
            }));
            store.dispatch(addCelebrity({
              rank: 23,
              name: 'Clive Calder',
              currency_type:'USD',
              netWorth: '2025000000',
              age: '69',
              country: 'South Africa'
            }));
            store.dispatch(addCelebrity({
              rank: 24,
              name: 'John de Mol',
              currency_type:'USD',
              netWorth: '2000000000',
              age: '59',
              country: 'Netherlands'
            }));
            store.dispatch(addCelebrity({
              rank: 25,
              name: 'Richard Desmond',
              currency_type:'USD',
              netWorth: '1900000000',
              age: '60',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 26,
              name: 'Austin Hearst',
              currency_type:'USD',
              netWorth: '1900000000',
              age: '62',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 27,
              name: 'Joop van den Ende',
              currency_type:'USD',
              netWorth: '1600000000',
              age: '73',
              country: 'Netherlands'
            }));
            store.dispatch(addCelebrity({
              rank: 28,
              name: 'Miuccia Prada',
              currency_type:'USD',
              netWorth: '1400000000',
              age: '65',
              country: 'Italy'
            }));
            store.dispatch(addCelebrity({
              rank: 29,
              name: 'Silvio Santos',
              currency_type:'USD',
              netWorth: '1300000000',
              age: '84',
              country: 'Brazil'
            }));
            store.dispatch(addCelebrity({
              rank: 30,
              name: 'Andrew Lloyd Webber',
              currency_type:'USD',
              netWorth: '1200000000',
              age: '66',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 31,
              name: 'Max Azria',
              currency_type:'USD',
              netWorth: '1200000000',
              age: '66',
              country: 'Tunisia'
            }));
            store.dispatch(addCelebrity({
              rank: 32,
              name: 'Andrea Della Valle',
              currency_type:'USD',
              netWorth: '1200000000',
              age: '66',
              country: 'Italy'
            }));
            store.dispatch(addCelebrity({
              rank: 33,
              name: 'Slavica Ecclestone',
              currency_type:'USD',
              netWorth: '1200000000',
              age: '56',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 34,
              name: 'Jeffrey Lurie',
              currency_type:'USD',
              netWorth: '1200000000',
              age: '56',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 35,
              name: 'Elisabeth Badinter',
              currency_type:'USD',
              netWorth: '1100000000',
              age: '71',
              country: 'France'
            }));
            store.dispatch(addCelebrity({
              rank: 36,
              name: 'Viscount Rothermere',
              currency_type:'USD',
              netWorth: '1095000000',
              age: '53',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 37,
              name: 'Cameron Mackintosh',
              currency_type:'USD',
              netWorth: '1087500000',
              age: '68',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 38,
              name: 'Merv Griffin',
              currency_type:'USD',
              netWorth: '1000000000',
              age: '89',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 39,
              name: 'Jonathan Harmsworth',
              currency_type:'USD',
              netWorth: '1000000000',
              age: '47',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 40,
              name: 'Ryan Kavanaugh',
              currency_type:'USD',
              netWorth: '1000000000',
              age: '40',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 41,
              name: 'Tory Burch',
              currency_type:'USD',
              netWorth: '1000000000',
              age: '48',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 42,
              name: 'J.K. Rowling',
              currency_type:'USD',
              netWorth: '1000000000',
              age: '49',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 43,
              name: 'David Bromilow',
              currency_type:'USD',
              netWorth: '975000000',
              age: '49',
              country: 'Germany'
            }));
            store.dispatch(addCelebrity({
              rank: 44,
              name: 'Lord Lloyd-Webber',
              currency_type:'USD',
              netWorth: '885000000',
              age: '66',
              country: 'United Kingdom'
            }));
            store.dispatch(addCelebrity({
              rank: 45,
              name: 'Jeffrey Katzenberg',
              currency_type:'USD',
              netWorth: '860000000',
              age: '64',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 46,
              name: 'Jerry Bruckheimer',
              currency_type:'USD',
              netWorth: '850000000',
              age: '71',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 47,
              name: 'U2',
              currency_type:'USD',
              netWorth: '838000000',
              age: '49',
              country: 'Ireland'
            }));
            store.dispatch(addCelebrity({
              rank: 48,
              name: 'Aishwarya Al Alsaud',
              currency_type:'USD',
              netWorth: '835000000',
              age: '55',
              country: 'Saudi Arabia'
            }));
            store.dispatch(addCelebrity({
              rank: 49,
              name: 'David Copperfield',
              currency_type:'USD',
              netWorth: '800000000',
              age: '58',
              country: 'United States'
            }));
            store.dispatch(addCelebrity({
              rank: 50,
              name: 'Larry David',
              currency_type:'USD',
              netWorth: '800000000',
              age: '67',
              country: 'United States'
            }));


const template = ( <
    Provider store = {
        store
    } >
    <
    AppRouter / >
    <
    /Provider>
);

ReactDOM.render(template, document.getElementById('app'));