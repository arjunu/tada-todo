import React from 'react';

export default class SearchTask extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const searchText = e.target.value.trim();
        this.props.onSearch(searchText);
    }

    render () {  
    	return <div className="to-do__search-box clearfix">
				<div className="to-do__search-box__ico fleft"></div>
				<div className="to-do__search-box__input-wrapper fleft">
					<input type="text" className="to-do-default-text-box" value={this.props.filterBy} 
                        placeholder="Search for tasks" onChange={this.handleSearch}/>
				</div>	
			</div>
    }
}