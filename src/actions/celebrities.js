import uuid from 'uuid';

export const addCelebrity = ({
    rank = '',
    name = '',
    netWorth = '',
    age = '',
    country = 0
} = {}) => ({
    type: 'ADD_CELEBRITY',
    celebrity: {
        rank,
        name,
        netWorth,
        age,
        country
    }
});

