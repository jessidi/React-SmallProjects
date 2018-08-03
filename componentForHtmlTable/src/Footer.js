import React, {Component} from 'react';

class Footer extends Component {
  render() {
        const footerStyle = {
             position: 'fixed',
            'bottom': 0,
             width: '100%',
             height: 50,
            'background-color': '#DDA0DD'
        }
       const pStyle = {
           'text-align': 'center'
       }
    return (
        <div style={footerStyle}>
            <p style={pStyle}>Copyright 1994-2018 by miemieDi. All Rights Reserved.</p>
        </div>
    );
  }
}

export default Footer;