import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      ifStart: false
    };
  }

  startOrStop = () => {
    let ifStart = this.state.ifStart;
    if(!ifStart){
      this.interval = this.startCounting();
    } else {
      clearInterval(this.interval);
    }
    this.setState({ifStart: !ifStart});
  };

  reset = () => {
    this.setState({ifStart: true, timer: 0});
    clearInterval(this.interval);
    this.interval = this.startCounting();
  };

  startCounting = () => {
    return setInterval(this.oneSecond, 1000);
  }

  oneSecond = () => {
    this.setState((prevState) => {
      return {
        timer: prevState.timer + 1
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Show">{this.state.timer}</h1>
          <div className="Buttons">
             <button onClick={this.startOrStop}><h1 className="Symbol">{this.state.ifStart ? 'STOP' : 'START'}</h1></button>
             <button onClick={this.reset}><h1 className="Symbol">RESET</h1></button>
        </div>
      </div>
    );
  }
}

export default App;