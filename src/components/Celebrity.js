import React from 'react';
import {
    connect
} from 'react-redux';


const Celebrity = ({
    rank,
    name,
    currency_type,
    netWorth,
    age,
    country,
    dispatch
}) => ( <
    div >
    <
    td bgcolor = "#3A639D" > No: {
        rank
    } < /td> <
    td > < p > Name: {
        name
    } < /p> <
    p > Net Worth: {currency_type}  {
        netWorth
    } < /p> <
    p > Age: {
        age
    } < /p> <
    p > Country of Birth: {
        country
    } < /p></td >




    <
    /div>
);

export default connect()(Celebrity);