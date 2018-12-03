
export const addCelebrity = ({
    rank = 0,
    name = '',
    currency_type='',
    netWorth = '',
    age = '',
    country = ''
} = {}) => ({
    type: 'ADD_CELEBRITY',
    celebrity: {
        rank,
        name,
        currency_type,
        netWorth,
        age,
        country
    }
});

