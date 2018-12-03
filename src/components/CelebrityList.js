import React from 'react';
import {
    connect
} from 'react-redux';
import Celebrity from './Celebrity';
import {
    filterText,
    startYear,
    endYear
} from '../actions/filters';
import getVisibleCelebrities from '../selectors/celebrities';

class CelebrityList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        let {
            data = []
        } = this.props.celebrities;

        if (!this.props.celebrities.length)
            return ( < tr bgcolor = "#3A639D" > < div > No Results Found < /div>< /tr > );

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