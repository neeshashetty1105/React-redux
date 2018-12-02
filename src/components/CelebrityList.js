import React from 'react';
import { connect } from 'react-redux';
import Celebrity from './Celebrity';
import getVisibleCelebrities from '../selectors/celebrities';

const CelebrityList = (props) => (

<div >
            {props.celebrities.map(celebrity => {
                return (
                    <tr key={celebrity.id}>
                        <Celebrity {...celebrity} />
                    </tr>
                );
            })}


</div>

);

const mapStateToProps = (state) => {
    return {
        celebrities: getVisibleCelebrities(state.celebrities, state.filters)
    };
}

export default connect(mapStateToProps)(CelebrityList);