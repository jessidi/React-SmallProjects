import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  //this.props.handleSubmit
  
  handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target.elements.username.value;
    let password = e.target.elements.password.value;
    this.props.handleSubmit(username, password);
  }

  render() {
    return (
         <form onSubmit={this.handleSubmit}>
            <div className="inputs">username: <input type="text" name="username"/></div>
            <div className="inputs">password: <input type="password" name="password"/></div>
            <div className="inputs"><input type="submit" value="Login" /></div>             
       </form>
  
    );
  }
}

export default Form;