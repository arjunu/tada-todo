import React from 'react';

export default class TaskGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let { title, list} = this.props.data, completeness;

        let listElements = list.map(
            (listItem, index) => (
                <li key={listItem.id} className="to-do__task-group__task-list__item clearfix">
                    <label className="fleft">
                        <input type="checkbox" value={listItem.done}/>
                        <span className="to-do__task-group__task-list__item__name">{listItem.name}</span>
                    </label>
                    <div className="to-do__task-group__task-list__item__delete fright">
                        <span className="to-do__task-group__task-list__item__delete__ico">+</span>
                    </div>
                </li>
            ));

        completeness = Math.round(list.reduce((sum = 0, listItem) => {
            console.log(listItem, sum);
            if (listItem.done) return sum+=1;
            else return sum;
        }, 0)/list.length * 100);

        return <div className="to-do__task-group active fleft">
            <div className="to-do__task-group__close">
                <div className="to-do__task-group__close__ico">+</div>
            </div>
            <div className="to-do__task-group__header">
                <span className="bold-text">{title}</span>
                <span className="to-do__task-group__header__perc">({completeness}%)</span>
                <input type="text" className="to-do-default-text-box"/>
            </div>
            <div className="to-do__task-group__progress-bar">
                <div className="to-do__task-group__progress-bar--perc-completed" style={{width: completeness + '%'}}></div>
            </div>
            <div className="to-do__task-group__task-list-wrapper">
                <ul className="to-do__task-group__task-list">
                    {listElements}
                </ul>
            </div>
            <div className="to-do__task-group__add-new-wrapper">
                <input type="text" className="to-do-default-text-box"/>
            </div>
        </div>
    }
}