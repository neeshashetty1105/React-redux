
export const addCelebrity = ({
    rank = 0,
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

