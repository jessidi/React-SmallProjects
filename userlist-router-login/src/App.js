import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import ShowUserDetail from './components/ShowUserDetail';
import Header from './components/Header';
import Login from './components/Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.username = 'username';
    this.password = 'password';
    this.state = {isLogin: false};
  }

  handleLogin = () => {
    this.setState({isLogin: true});
  }

    render() {
      const username = 'username';
      const password = 'password';
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact={true} path="/" render={() => <Home isLogin={this.state.isLogin} />} />
              <Route exact={true} path="/list" render={() => <UserList isLogin={this.state.isLogin} />} />
              <Route path="/list/:id" render={(props) => <ShowUserDetail isLogin={this.state.isLogin} id={props.match.params.id}/>} /> 
              <Route path="/login" 
                render={() => <Login  
                                isLogin={this.state.isLogin} 
                                handleLogin={this.handleLogin}
                                username={username} password={password} />}  
              />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;