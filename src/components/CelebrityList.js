import React from 'react';
import {
    connect
} from 'react-redux';
import Celebrity from './Celebrity';
import {
    filterText,
    sortBy,
   currency,
   country
} from '../actions/filters';
import getVisibleCelebrities from '../selectors/celebrities';

class CelebrityList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        console.log("data length - "+this.props.celebrities.length)
        if (!this.props.celebrities.length)
            return (  < tr bgcolor = "#3A639D" > < td> No Results Found < /td>< /tr > );

        return (
            this.props.celebrities.map(celebrity => {

                return ( <
                    tr key = {
                        celebrity.rank
                    } >
                    <
                    Celebrity { ...celebrity
                    }
                    /> < /
                    tr >


                );

            })
        );
    }
}

const mapStateToProps = (state) => {
    return {

        celebrities: getVisibleCelebrities(state.celebrities, state.filters)
    }
}

export default connect(mapStateToProps)(CelebrityList);