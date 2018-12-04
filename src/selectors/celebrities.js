// getVisibleCelebrities
export default (celebrities, {
    text,
    sortBy,
    currency,
    country
}) => {
    return celebrities.filter(celebrity => {


        var countryMatch = true;

        var  textMatch =
                celebrity.name.toLowerCase().includes(text.toLowerCase()) ||
                celebrity.country.toLowerCase().includes(text.toLowerCase()) || celebrity.age.includes(text) || celebrity.netWorth.includes(text);

        if (country != 'showAll') {
                countryMatch = celebrity.country.toLowerCase().includes(country.toLowerCase());
        }

        if (currency === 'usd') {

            if (celebrity.currency_type === 'EUR') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.08695652173913).toString();
            }
            if (celebrity.currency_type === 'AUD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.78).toString();
            }
            celebrity.currency_type = 'USD';

        } else if (currency === 'euro') {
            if (celebrity.currency_type === 'USD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.92).toString();
            }
            if (celebrity.currency_type === 'AUD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 0.8478260869565217).toString();
            }
            celebrity.currency_type = 'EUR';

        } else if (currency === 'aud') {

            if (celebrity.currency_type === 'USD') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.282051282051282).toString();
            }
            if (celebrity.currency_type === 'EUR') {
                celebrity.netWorth = Math.round(celebrity.netWorth * 1.179487179487179).toString();
            }
            celebrity.currency_type = 'AUD';

        }


        console.log("text" + textMatch);
        return textMatch && countryMatch;


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