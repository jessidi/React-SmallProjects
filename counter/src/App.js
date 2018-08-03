import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  add = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    }); 
  };

  minus = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Show">{this.state.count}</h1>
          <div className="Buttons">
             <button onClick={this.add}><h1 className="Symbol">+</h1></button>
             <button onClick={this.minus}><h1 className="Symbol">-</h1></button>
        </div>
      </div>
    );
  }
}

export default App;
