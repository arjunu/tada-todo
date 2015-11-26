import React from 'react';
import ContentEditable from './content-editable';

export default class TaskGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onListItemDelete = this.props.onListItemDelete;
        this.onListItemCheck = this.props.onListItemCheck;
    }

    onListItemEdit(event, taskGroupId, listItemId, listItemText) {
        if (event.keyCode === 13) {
            event.stopPropagation();
            this.props.onListItemEdit(event.currentTarget.innerText, taskGroupId, listItemId);
            event.target.contentEditable = false;
        }
        if (event.which === 27) {
            event.currentTarget.innerText = listItemText;
            event.target.contentEditable = false;
        }
    }

    onAddListItem(event, taskGroupId) {
        if (event.keyCode === 13) {
            this.props.onListItemAdd(event.target.value, taskGroupId);
            event.target.value = '';
        }
    }

    handleDoubleClick(e) {
        console.log("handleDoubleClick", e.target);
        e.target.contentEditable = true;
        e.preventDefault();
    }

    handleSubmit(e, id, title) {
        if (e.which === 13) {
            this.props.onEditTitle(e.currentTarget.innerText, id);
            e.target.contentEditable = false;
        }
        if (e.which === 27) {
            e.currentTarget.innerText = title;
            e.target.contentEditable = false;
        }
    }


    render() {
        let { title, list, id } = this.props.data, taskGroupIndex = this.props.index, completeness;
        console.log("render");

        let listElements = list
            .filter(listItem => listItem.name.toLowerCase().indexOf(this.props.filterBy) > -1)
            .map((listItem, index) => (
                <li
                    key={listItem.id}
                    className="to-do__task-group__task-list__item clearfix"
                    onClick={(event) => { event.stopPropagation(); this.onListItemCheck(id, index); }}>
                    <span className="fleft">
                        <input type="checkbox" checked={listItem.done}/>
                        <span className="to-do__task-group__task-list__item__name user-select-enabled"
                              onClick={(event) => event.stopPropagation()}
                              onDoubleClick={(event) => this.handleDoubleClick(event)}
                              onKeyDown={(event) => this.onListItemEdit(event, id, listItem.id, listItem.name)}>{listItem.name}</span>
                    </span>

                    <div
                        className="to-do__task-group__task-list__item__delete fright"
                        onClick={(event) => { event.stopPropagation(); this.onListItemDelete(id, listItem.id); }}>
                        <span className="to-do__task-group__task-list__item__delete__ico">+</span>
                    </div>
                </li>
            ));

        completeness = Math.round(list.reduce((sum = 0, listItem) => {
                if (listItem.done) return sum + 1;
                else return sum;
            }, 0) / list.length * 100);

        return <div className="to-do__task-group active fleft">
            <div className="to-do__task-group__close">
                <div className="to-do__task-group__close__ico"
                     onClick={() => this.props.onDelete(id)}>
                    +
                </div>
            </div>
            <div className="to-do__task-group__header">
                 <ContentEditable className="bold-text" id={'title'+id}
                                  onKeyPress={(event) => this.handleSubmit(event, id, title)}
                                  onDoubleClick={(event) => this.handleDoubleClick(event)}
                                  tag="span"
                                  html={title}>

                 </ContentEditable>
                <span className="to-do__task-group__header__perc">({completeness || ''}%)</span>
            </div>
            <div className="to-do__task-group__progress-bar">
                <div className="to-do__task-group__progress-bar--perc-completed"
                     style={{width: completeness + '%'}}></div>
            </div>
            <div className="to-do__task-group__task-list-wrapper">
                <ul className="to-do__task-group__task-list">
                    {listElements}
                </ul>
            </div>
            <div className="to-do__task-group__add-new-wrapper">
                <input type="text" className="to-do-default-text-box"
                       onKeyDown={(event) => this.onAddListItem(event, id)}/>
            </div>
        </div>
    }
}