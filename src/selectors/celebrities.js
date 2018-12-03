// getVisibleCelebrities
export default (celebrities, {
    text,
    sortBy,
    currency
}) => {
    return celebrities.filter(celebrity => {

        var textMatch = true;

        if (text != 'showAll') {
            textMatch =
                celebrity.name.toLowerCase().includes(text.toLowerCase()) ||
                celebrity.country.toLowerCase().includes(text.toLowerCase()) || celebrity.age.includes(text) || celebrity.netWorth.includes(text);

        } else {
            textMatch = true;
        }

        if (currency === 'usd') {

            if (celebrity.currency_type === 'EUR') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.08695652173913);
            }
            if (celebrity.currency_type === 'AUD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.78);
            }
            celebrity.currency_type = 'USD';
            textMatch = true;
        } else if (currency === 'euro') {
            if (celebrity.currency_type === 'USD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.92);
            }
            if (celebrity.currency_type === 'AUD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.8478260869565217);
            }
            celebrity.currency_type = 'EUR';
            textMatch = true;
        } else if (currency === 'aud') {

            if (celebrity.currency_type === 'USD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.282051282051282);
            }
            if (celebrity.currency_type === 'EUR') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.179487179487179);
            }
            celebrity.currency_type = 'AUD';
            textMatch = true;
        }


        console.log("text" + textMatch);
        return textMatch;


    }).sort((celebrity1, celebrity2) => {
        if (sortBy === 'rank') {
            return celebrity1.rank < celebrity2.rank ? -1 : 1;
        } else
        if (sortBy === 'name') {
            return celebrity1.name.localeCompare(celebrity2.name);
        } else if (sortBy === 'country') {
            return celebrity1.country < celebrity2.country ? -1 : 1;
        } else if (sortBy === 'age') {
            return celebrity1.age.localeCompare(celebrity2.age);
        } else if (sortBy === 'netWorth') {
            return celebrity1.netWorth < celebrity2.netWorth ? -1 : 1;
        }
    });
}