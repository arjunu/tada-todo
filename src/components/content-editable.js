import React from 'react';
import ReactDOM from 'react-dom';

export default class ContentEditable extends React.Component {
    constructor() {
        super();
        this.emitChange = this.emitChange.bind(this);
    }

    render() {
        return <this.props.tag
            {...this.props}
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable="true"
            dangerouslySetInnerHTML={{__html: this.props.html}}>
        </this.props.tag>;
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
    }

    componentDidUpdate() {
        if (this.props.html !== ReactDOM.findDOMNode(this).innerHTML) {
            ReactDOM.findDOMNode(this).innerHTML = this.props.html;
        }
    }

    emitChange(evt) {
        var html = ReactDOM.findDOMNode(this).innerHTML;
        if (this.props.onKeyPress && html !== this.lastHtml) {
            evt.target = {value: html};
            this.props.onKeyPress(evt);
        }
        this.lastHtml = html;
    }
}