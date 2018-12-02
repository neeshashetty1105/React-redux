// getVisibleCelebrities
export default (celebrities, { text, sortBy, currency }) => {
    return celebrities.filter(celebrity => {

let textMatch='';
     if(text!=='showAll')
    {
      textMatch =
                 celebrity.name.toLowerCase().includes(text.toLowerCase())
                 || celebrity.country.toLowerCase().includes(text.toLowerCase()) || celebrity.age.includes(text) || celebrity.netWorth.includes(text) ;
     }
     if (currency==='usd'){
          celebrity.netWorth = celebrity.netWorth * 1
          } else if (currency==='euro'){
     celebrity.netWorth = celebrity.netWorth * 0.92
     } else if (currency==='aud'){
       celebrity.netWorth = celebrity.netWorth * 0.78
     }
  return textMatch ;
    }).sort((celebrity1, celebrity2) => {
     if (sortBy === 'rank') {
                return celebrity1.rank.localeCompare(celebrity2.rank);
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