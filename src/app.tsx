/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './actions.ts';
import TaskGroup from  './components/task-group.tsx';
import SearchBox from './components/search-box.tsx';
import AddButton from './components/add-button.tsx';
import {List, Task, TaskGroups} from './models/taskgroup.ts'
import {ActionType} from './models/actiontype.ts'

interface AppProps {
    data: TaskGroups;
    actions: ActionType;
};

class App extends React.Component<AppProps, any> {
    constructor() {
        super();
    }

    render() {
        let {data, actions} = this.props;
        let {taskGroups, searchText} = data;
        let filteredGroup = [];
        if (searchText) {
            filteredGroup = taskGroups
                .filter((taskGroup) => taskGroup.list
                    .filter(task => task.name.toLowerCase().indexOf(searchText) > -1).length > 0);
        } else {
            filteredGroup = taskGroups;
        }
        let taskGroupElements = filteredGroup
            .map((taskGroup, index) => (
                <TaskGroup
                    key = { taskGroup.id }
                    filterBy = { searchText }
                    data = { taskGroup }
                    onListItemCheck = { actions.checkListItem }
                    onListItemDelete = { actions.removeListItem }
                    onListItemAdd = { actions.addListItem }
                    onDelete = { actions.removeTaskGroup }
                    onEditTitle = { actions.editTitle }
                    onListItemEdit = { actions.updateListItem }
                    />
            ));

        return <div className="to-do-wrapper" >
                    <h1 className="fleft" > TADA TODO </h1>
                    <SearchBox onSearch= {actions.searchTask} searchText= { searchText } />
                    <div className="to-do__task-group-wrapper clearall clearfix" >
                        {taskGroupElements}
                        <AddButton handleClick = {actions.createTaskGroup} />
                        </div>
            </div>
    }
}

function mapStateToProps(state) {
    return { data: state };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(TodoActions, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);