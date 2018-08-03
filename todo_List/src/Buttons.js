import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
    render() {
      return (
        <div >
            Show:
            <button onClick={this.props.showAllTodos} disabled={this.props.show===1}>All</button>
            <button onClick={this.props.showActiveTodos} disabled={this.props.show===2}>Active</button>
            <button onClick={this.props.showCompletedTodos} disabled={this.props.show===3}>Completed</button>
        </div>
      );
    }
  }
  
  export default Buttons;