import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    render() {
      return (
            <div className="header">
                <Link to="/">Problems</Link>
                 <Link to="/login">Login</Link>
            </div>
      );
    }
  }

  export default Header;