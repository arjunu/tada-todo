/// <reference path="../../typings/react/react.d.ts" />
import React = __React;
import ReactDOM = __React;


interface ContentEditableProps extends React.Props<any> {
    onChange: Function;
    onClick: Function;
    tag: string;
    id: string;
    html: string;
}

export default class ContentEditable extends React.Component<ContentEditableProps, any> {
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
            dangerouslySetInnerHTML={{ __html: this.props.html }}>
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
        if (this.props.onChange && html !== this.lastHtml) {
            evt.target = { value: html };
            this.props.onChange(evt);
        }
        this.lastHtml = html;
    }
}