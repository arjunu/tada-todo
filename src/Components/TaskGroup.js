import React from 'react';

export default class TaskGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render () {        
        return <div className="to-do__task-group active fleft">
				<div className="to-do__task-group__close">
					<div className="to-do__task-group__close__ico">+</div>
				</div>
				<div className="to-do__task-group__header">
					<span className="bold-text">Design Tasks</span>
					<span className="to-do__task-group__header__perc">(78%)</span>
				</div>
				<div className="to-do__task-group__progress-bar">
					<div className="to-do__task-group__progress-bar--perc-completed"></div>
				</div>
				<div className="to-do__task-group__task-list-wrapper">					
					<ul className="to-do__task-group__task-list">
						<li className="to-do__task-group__task-list__item clearfix">
							<label className="fleft">
								<input type="checkbox"/>
								<span className="to-do__task-group__task-list__item__name">Task Item 1</span>
							</label>
							<div className="to-do__task-group__task-list__item__delete fright">
								<span className="to-do__task-group__task-list__item__delete__ico">+</span>
							</div>
						</li>
						<li className="to-do__task-group__task-list__item clearfix">
							<label className="fleft">
								<input type="checkbox"/>
								<span className="to-do__task-group__task-list__item__name">Task Item 2</span>
							</label>
							<div className="to-do__task-group__task-list__item__delete fright">
								<span className="to-do__task-group__task-list__item__delete__ico">+</span>
							</div>
						</li>
						<li className="to-do__task-group__task-list__item clearfix">
							<label className="fleft">
								<input type="checkbox"/>
								<span className="to-do__task-group__task-list__item__name">Task Item 3</span>
							</label>
							<div className="to-do__task-group__task-list__item__delete fright">
								<span className="to-do__task-group__task-list__item__delete__ico">+</span>
							</div>
						</li>
						<li className="to-do__task-group__task-list__item clearfix">
							<label className="fleft">
								<input type="checkbox"/>
								<span className="to-do__task-group__task-list__item__name striked">Task Item 4</span>
							</label>
							<div className="to-do__task-group__task-list__item__delete fright">
								<span className="to-do__task-group__task-list__item__delete__ico">+</span>
							</div>
						</li>
					</ul>
				</div>
				<div className="to-do__task-group__add-new-wrapper">
					<input type="text" className="to-do-default-text-box"/>
				</div>
			</div>
    }
}