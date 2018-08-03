import React, { Component } from 'react';


class StatusBar extends Component {
  render() {
    const barStyle = {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 50,
       'background-color': '#D8B4F3'
    };
    return (
      <div style={barStyle}>
        <p style={{textAlign: 'center', color: '#828180','fontSize': 20}}>Status Bar</p>
      </div>
    );
  }
}

export default StatusBar;