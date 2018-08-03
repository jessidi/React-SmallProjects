import React, { Component } from 'react';
import StatusBar from './StatusBar';
import Docker from './Docker';
import Content from './Content';

class Screen extends Component {
  render() {
    const screenStyle = {
        margin: '20px auto', 
        position: 'relative',
        width: 320,
        height: 568,
        border: 'solid 1px black'
    };
    return (
      <div style={screenStyle}>
        <StatusBar />
        <Content />
        <Docker />
      </div>
    );
  }
}

export default Screen;
