import React from 'react';
import ContentEditable from './content-editable';

export default class TaskGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onListItemDelete = this.props.onListItemDelete;
        this.onListItemCheck = this.props.onListItemCheck;
        this.onListItemEdit = this.props.onListItemEdit;
    }

    onAddListItem(event, taskGroupId) {
        if (event.keyCode === 13) {
            this.props.onListItemAdd(event.target.value, taskGroupId);
            event.target.value = '';
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
                    onClick={(event) => { event.stopPropagation(); this.onListItemCheck(id, listItem.id); }}>
                    <span className="fleft">

                        <input type="checkbox" checked={listItem.done}/>

                        <ContentEditable className="to-do__task-group__task-list__item__name user-select-enabled"
                                         onChange={(event) => {this.onListItemEdit(event.target.value, id, listItem.id);}}
                                         onClick={(event) => (event.stopPropagation())}
                                         tag="span"
                                         id={listItem.id + index + listItem.name}
                                         html={listItem.name}>
                        </ContentEditable>
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
                                 onChange={(event) => {event.stopPropagation(); this.props.onEditTitle(event.target.value, id);}}
                                 tag="span"
                                 html={title}>

                </ContentEditable>
                <span className="to-do__task-group__header__perc">
                    ({completeness || ''}%)
                </span>
            </div>

            <div className="to-do__task-group__progress-bar">
                <div className="to-do__task-group__progress-bar--perc-completed"
                     style={{width: completeness + '%'}}>
                </div>
            </div>

            <div className="to-do__task-group__task-list-wrapper">
                <ul className="to-do__task-group__task-list">
                    {listElements}
                </ul>
            </div>

            <div className="to-do__task-group__add-new-wrapper">
                <input type="text" className="to-do-default-text-box" onKeyDown={(event) => this.onAddListItem(event, id)}/>
            </div>
        </div>
    }
}