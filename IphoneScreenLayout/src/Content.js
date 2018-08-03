import React, { Component } from 'react';
import Icon from './Icon';

class Content extends Component {
  render() {
    const contentStyle = {
        position: 'absolute',
        top: 50,
        bottom: 100,
        width: '100%',
        'background-color': '#FFC0CB',

        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'flex-start',
        'align-content': 'flex-start'
    };
    return (
      <div style={contentStyle}>
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
       <Icon />
     
      </div>
    );
  }
}

export default Content;