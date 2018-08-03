import React, { Component } from 'react';
import Icon from './Icon';

class Docker extends Component {
  render() {
    const dockerStyle = {
        position: 'absolute',
        bottom: 0, 
        width: '100%',
        height: 100,
        'background-color': '#FEB17D',

        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'flex-start',
        'align-content': 'flex-start'
    };
    return (
      <div style={dockerStyle}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    );
  }
}

export default Docker;