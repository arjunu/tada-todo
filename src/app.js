import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './actions';
import TaskGroup from  './components/task-group';
import SearchTask from './components/search-task';
import AddButton from './components/add-button';

class App extends Component {
    constructor() {
      super();
      this.createTaskGroup = this.createTaskGroup.bind(this);
    }
    createTaskGroup(){
        
    }
    render() {
        console.log("app props", this.props);
        let {data, actions} = this.props;
        let taskGroups = data.get('taskGroups');
        let searchText = data.get('searchText');
        let filteredGroup = [];
        if(searchText) {
            filteredGroup = taskGroups.toJS()
        .filter(taskGroup => taskGroup.list.filter(task => task.name.toLowerCase().indexOf(searchText) > -1 ).length);
        } else {
            filteredGroup = taskGroups.toJS();
        }
        let taskGroupElements = filteredGroup
            .map((taskGroup, index) => (
                <TaskGroup
                    key={taskGroup.id}
                    index={index}
                    filterBy={searchText}
                    data={taskGroup}
                    onListItemCheck={actions.checkListItem}
                    onListItemDelete={actions.removeListItem}
                    onListItemAdd={actions.addListItem}
                    onDelete={actions.removeTaskGroup}
                    onEditTitle={actions.editTitle}
                    onListItemEdit={actions.updateListItem}
                />
            ));

        return <div className="to-do-wrapper">
            <h1 className="fleft">TADA TODO</h1>
            <SearchTask onSearch={actions.searchTask}/>
            <div className="to-do__task-group-wrapper clearall clearfix">
                {taskGroupElements}
                <AddButton handleClick={actions.createTaskGroup}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {data: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
