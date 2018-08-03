import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Welcome from './Welcome';
import * as moment from 'moment';

const today = moment();
const formatToday = today.format('YYYYMMDD');
const formatTomorrow  = today.add(1,'days').format('YYYYMMDD');
const formatYesterday  = today.add(-2,'days').format('YYYYMMDD');

console.log('today', formatToday);
console.log('tomorrow', formatTomorrow);
console.log('yesterday', formatYesterday);


const users = [
  {username: 'today', password: formatToday} ,
  {username: 'tomorrow', password: formatTomorrow},
  {username: 'yesterday', password: formatYesterday},
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: users, 
      username: '', 
      password: '',
      isLogin: false,
      error: false
    };
  }

  handleSubmit = (username, password) => {
    let users = this.state.users;
    let match = false;
    users.forEach((user) => {
      if(user.username === username && user.password === password) {
        match = true;
      }
    });
    if(!match) {
      this.setState(() => {
        return {
          username: '', password: '', error: true, isLogin: false
        }
      });
    }
    else {
      this.setState({username: username, isLogin: true, error: false});
    }
  };

  handleLogout = (e) => {
    this.setState({ 
    username: '', 
    password: '',
    isLogin: false,
   });
  }

  render() {
    const isLogin = this.state.isLogin;
      return (
        <div className="App">
            {isLogin ? (
              <Welcome username={this.state.username} handleLogout={this.handleLogout}/>
            ) : (
              <Form handleSubmit={this.handleSubmit} />
            )
          }
          {this.state.error ? <p className="error">Please enter correct username and password!</p> : ''}
        </div>
    );
  }
}

export default App;
