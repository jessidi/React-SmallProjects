import React, { Component } from 'react';
import './App.css';

class Lists extends Component {
    render() {
        let showType = this.props.show;
        const lineSyle = {
            'textDecoration': 'line-through',
            'textDecorationStyle': 'solid',
            'textDecorationColor': 'red'
            }
      return (
        <ul> 
        {
            this.props.todos.map((todo, index) => {
                if(showType === 1) {
                    if(!todo.completed) return  <li key={index} onClick={() => this.props.changeCompleted(index)}>{todo.name}</li>;
                    else return <li style={lineSyle} key={index} onClick={() => this.props.changeCompleted(index)}>{todo.name}</li>;
                } else if(showType === 2) {
                    if(!todo.completed) return <li key={index} onClick={() => this.props.changeCompleted(index)}>{todo.name}</li>;
                } else {
                    if(todo.completed) return <li style={lineSyle} key={index} onClick={() => this.props.changeCompleted(index)}>{todo.name}</li>;
                }
            })
        }   
        </ul>
      );
    }
  }
  
  export default Lists;