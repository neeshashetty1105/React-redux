import React from 'react';
import {
    connect
}
from 'react-redux';
import {
    filterText, sortBy, updateCurrency, clear
}
from '../actions/filters';
class CelebrityFilters extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < div class = "row" >

            < div id = "div1" >
            < label className = "form-label" > Birthplace: < /label>

            < p >
            < select className = "form-input"
            value = {
                this.props.filters.text1
            }
            onChange = {
                (e) => {
                    this.props.dispatch(filterText(e.target.value))
                }
            } >
            < option value = "showAll" > Show All < /option> < option value = "united states" > United States < /option> < option value = "australia" > Australia < /option> < option value = "United Kingdom" > United Kingdom < /option> < option value = "Italy" > Italy < /option> < /select> < /p> < label className = "form-label" > Currency Converter: < /label> < p >
            < select className = "form-input"
            value = {
                this.props.filters.text2
            }
            onChange = {
                (e) => {
                    this.props.dispatch(clear());
                    this.props.dispatch(updateCurrency(e.target.value));
                }
            } >
            < option value = "usd" > US Dollar < /option> < option value = "euro" > Euro < /option> < option value = "aud" > Australian Dollar < /option>

            < /select> < /p> < /div> < div id = "div1" >

            < label className = "form-label" > Search: < /label> < p >
            < input className = "form-input"
            type = 'text'
            placeholder = 'search'
            value = {
                this.props.filters.text4
            }
            onChange = {
                (e) => {
                    this.props.dispatch(filterText(e.target.value));
                }
            } >
            < /input> < /p> < label className = "form-label" > Order By: < /label> < p >
            < select className = "form-input"
            value = {
                this.props.filters.text3
            }
            onChange = {
                (e) => {
                    this.props.dispatch(sortBy(e.target.value))
                }
            } >
            < option value = "rank" > Rank < /option> < option value = "name" > Name < /option> < option value = "netWorth" > NetWorth < /option> < option value = "age" > Age < /option> < option value = "country" > Country Of Birth < /option> < /select> < /p>

            < /div> < /div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(CelebrityFilters);