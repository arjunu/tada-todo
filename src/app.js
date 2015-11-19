import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './actions';
import TaskGroup from './Components/TaskGroup';
import SearchTask from './Components/SearchTask';
import AddButton from './Components/AddButton';

class App extends Component {
    render() {
        const { taskGroupArray } = this.props;
        
        return <div className="to-do-wrapper">
                     <h1 className="fleft">Tada ToDo</h1>
                    <SearchTask/>
                    <div className="to-do__task-group-wrapper clearall clearfix">
                        <TaskGroup/>
                        <AddButton/>
                    </div>
                </div>
    }
}

function mapStateToProps(state) {
    return {todos: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
