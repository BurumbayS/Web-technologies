import React, { Component } from 'react';

class Search extends Component {
    updateSearch() {
        const val  = this.refs.searchValue.value;
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <input type = "text"
                ref = "searchValue"
                onChange = { this.updateSearch.bind(this) }
            />
        );
    }
}

export default Search;
