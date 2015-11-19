import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './actions';
import TaskGroup from './components/task-group';
import SearchTask from './components/search-task';
import AddButton from './components/add-button';

class App extends Component {
    render() {
        //console.log(this.props);
        let {store, actions} = this.props;
        let {taskGroups, filterText} = store;
        taskGroups = this.props.store.taskGroups.map(
            (taskGroup, index) => (
                <TaskGroup key={taskGroup.id} filterBy={filterText} data={taskGroup} onListItemCheck={actions.checkListItem} onDelete={actions.removeTaskGroup}>
                </TaskGroup>
            ));

        return <div className="to-do-wrapper">
            <h1 className="fleft">Tada ToDo</h1>
            <SearchTask/>
            <div className="to-do__task-group-wrapper clearall clearfix">
                {taskGroups}
                <AddButton handleClick={actions.createTaskGroup}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
