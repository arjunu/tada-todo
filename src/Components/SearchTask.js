import React from 'react';

export default class SearchTask extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render () {  

    	return <div className="to-do__search-box clearfix">
				<div className="to-do__search-box__ico fleft"></div>
				<div className="to-do__search-box__input-wrapper fleft">
					<input type="text" className="to-do-default-text-box" placeholder="Search for tasks"/>
				</div>	
			</div>
    }
}