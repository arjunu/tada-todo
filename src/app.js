import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './actions';
/*import TodoList from './todoList';*/
/*import TodoInput from './todoInput';*/

//components
//import AddTodo from './components/AddTodo';
//import List from './components/List';

class App extends Component {
    render() {
        //const { todos, actions } = this.props;
        //console.log("stoire", todos[0]);
        //let notes = [];
        //for (var i = 0; i < todos.length; i++) {
        //    notes.push(<List key={todos[i].id} list={todos[i]}></List>);
        //}
        return <div>
            <h1 className="title">Tada ToDo</h1>
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
