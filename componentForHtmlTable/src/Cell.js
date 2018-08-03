import React, {Component} from 'react';

class Cell extends Component {
  render() {
    const styleIt = {
      width: 'auto',
      height: 30,
      border: '1px solid #000',
      padding: '5px 20px'
    };
    return (
      <td style={styleIt}>{this.props.text}</td>
    );
  }
}

export default Cell;