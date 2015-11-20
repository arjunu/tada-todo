import React from 'react';

export default class AddButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.props.handleClick.bind(this);
    }
    
    render () {        
        return <div className="to-do__task-group to-do__add-task-group fleft" onClick={this.handleClick}>+</div>
    }
}