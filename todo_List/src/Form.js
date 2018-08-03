import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    addTodo = (e) => {
        e.preventDefault();
        let todo = e.target.elements.add.value.trim();
        if(!!todo) {
            this.props.addTodo({name: todo, completed: false});
            e.target.elements.add.value = '';
        }
    }
    render() {
      return (
        <form onSubmit={this.addTodo}>
            <input type="text" name="add" />
            <button>Add Todo</button>
        </form>
      );
    }
  }
  
  export default Form;