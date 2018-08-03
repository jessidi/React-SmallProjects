import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Lists from './Lists';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      show: 1
    }
  }

  addTodo = (todo) => {
    this.setState((prevState) => {
      let todos = prevState.todos;
      todos.push(todo);
        return {
          todos: todos
        }            
    });    
  }
  showAllTodos = () => {
    this.setState({show: 1});
  }
  showActiveTodos = () => {
    this.setState({show: 2});
  }
  showCompletedTodos = () => {
    this.setState({show: 3});
  }
  changeCompleted = (index) => {
    let todos = this.state.todos;
    let todo = todos[index];
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <Form addTodo={this.addTodo}/>
        <Lists todos={this.state.todos} show={this.state.show} changeCompleted={this.changeCompleted}/>
        <Buttons showAllTodos={this.showAllTodos} showActiveTodos={this.showActiveTodos} showCompletedTodos={this.showCompletedTodos}  show={this.state.show}/>
      </div>
    );
  }
}

export default App;
