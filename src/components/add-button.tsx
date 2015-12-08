/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

interface AddButtonProps {
    handleClick: Function;
}

export default class AddButton extends React.Component<AddButtonProps , any>{
    constructor(props : AddButtonProps) {
        super(props);
    }
        
    render() {
        return <div className="to-do__task-group to-do__add-task-group fleft" onClick= {this.props.handleClick.bind(this)} > + </div>
    }
}