import React, {Component} from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 50,
        'background-color': '#DDA0DD'
    }
    const listStyle = {
        display: 'inline',
        margin: '5px 20px'
    }
    return (
      <div style={headerStyle}>
        <ul>
            <li style={listStyle}>Home</li>
            <li style={listStyle}>About</li>
            <li style={listStyle}>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Header;