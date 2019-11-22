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
    console.log(this.props);
    const displayList = this.props.todos.data && this.props.todos.data.length > 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { displayList &&
            <TodoList todoList={this.props.todos.data}/>
          }
          {this.props.todos.error &&
            <div>Errored! {this.props.todos.error.message}</div>
          }
        </header>
      </div>
    );
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
