import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

class Login extends Component {

constructor(props) {
  super(props);
  this.state = {username: '', password: ''};
}

getUsername = (e) => {
  this.setState({username: e.target.value});;
  
}

getPassword = (e) => {
  this.setState({password: e.target.value});
}

authenticateLogin = () => {
  const username = this.state.username;
  const password = this.state.password;

  if(username === this.props.username && password === this.props.password){    
    this.props.handleLogin();
  }
}

    render() {
      if(this.props.isLogin) {
        return <Redirect to={{pathname: '/'}}/>;
      }
      else return (
            <div className="login">
                 <div className="login_item">username: <input type="text" onChange={this.getUsername}/></div>
                 <div className="login_item">password: <input type="password" onChange={this.getPassword}/></div>
                 <div className="login_item"><button onClick={this.authenticateLogin}>Login</button></div>
            </div>
      );
    }
  }

  export default Login;