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
            console.log(this.props.celebrities)

            console.log("data.length = " + this.props.celebrities.length)
            if (!this.props.celebrities.length)
                return (< tr bgcolor = "#3A639D" > No data found < /tr>);

                    return (
                        this.props.celebrities.map(celebrity => {
                            console.log("here2")
                            return ( <div><
                                tr key = {
                                    celebrity.rank
                                } >
                                <
                                Celebrity { ...celebrity
                                }
                                /> <
                                /tr>
                                </div>
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