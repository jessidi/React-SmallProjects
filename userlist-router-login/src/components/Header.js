import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    render() {
      return (
            <div className="header">
                 <Link to="/login">Login</Link>
                 <Link to="/" className="homeLink">Home</Link>
                 <Link to="/list">User List</Link>
            </div>
      );
    }
  }

  export default Header;