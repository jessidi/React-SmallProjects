import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', error: false};
    };
    
    getUsername = (e) => {
        this.setState({username: e.target.value});;
    
    };

    getPassword = (e) => {
        this.setState({password: e.target.value});
    };

    authenticateLogin = () => {        
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        const jsonUser = JSON.stringify(user);
        console.log(jsonUser);
        
        axios
        .post(
            'http://api.haochuan.io/login', 
             jsonUser, 
             {
                headers: {
                    'Content-Type': 'application/json'
                }
             }
        )
        .then((res) => {
            if(res.status === 200){
                this.props.handleLogin();
            }
        })
        .catch((e) => {
            this.setState({error: true});
        });
       
    };

    render() {
      if(this.props.isLogin) {        
        return <Redirect to={{pathname: '/'}}/>;
      }
      else return (
            <div className="login">
                 <div className="login_item">username: <input type="text" onChange={this.getUsername}/></div>
                 <div className="login_item">password: <input type="password" onChange={this.getPassword}/></div>
                 <div className="login_item"><button onClick={this.authenticateLogin}>Login</button></div>
                 {this.state.error && <p className="error">Please enter correct username and password!</p>}
            </div>
      );
    }
  }

  export default Login;