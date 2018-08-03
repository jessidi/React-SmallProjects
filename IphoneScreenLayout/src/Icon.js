import React, { Component } from 'react';

class Icon extends Component {
  render() {

    const iconStyle = {
        'margin-top':25,
        'margin-left': 25,
        width: 45,
        height: 45,
        'list-style-type': 'none',
        border: 'solid 1px red'
    };
    return (
      <li style={iconStyle}></li>
    );
  }
}

export default Icon;