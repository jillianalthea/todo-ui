import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../style/App.css';
import TodoList from './TodoList';
import {getAllTodoItems} from '../redux/actions/todoActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getAllTodoItems();
  }
  render() {
    if (this.props.todos) {
      console.log(this.props);
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoList todoList={this.props.todos}/>
          </header>
        </div>
      );
    }
    return false;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodoItems: () => getAllTodoItems(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
