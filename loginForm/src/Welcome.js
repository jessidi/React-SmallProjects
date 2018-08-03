import React, { Component } from 'react';
import './App.css';

class Welcome extends Component {
  
  render() {
    return (
        <div >
            <p>Welcome! {this.props.username}</p>
            <button onClick={this.props.handleLogout}>Logout</button>
        </div>
    );
  }
}

export default Welcome;