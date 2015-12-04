import React from 'react';

export default class SearchBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const searchText = e.target.value.trim();
        this.props.onSearch(searchText);
    }

    render() {
        return <div className="to-do__search-box clearfix">
            <div className="to-do__search-box__ico fleft"></div>
            <div className="to-do__search-box__input-wrapper fleft">
                <input type="text"
                       className="to-do-default-text-box"
                       value={this.props.searchText}
                       placeholder="Search" onChange={this.handleSearch}/>
                {this.props.searchText ? <div className="to-do-default-text-box-clear cross-icon" onClick={() => (this.props.onSearch(""))}>+</div> : null}
            </div>
        </div>
    }
}