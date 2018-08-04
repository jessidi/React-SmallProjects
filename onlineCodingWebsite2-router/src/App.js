import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import Login from './Login';
import Header from './components/Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isLogin: false};
  }

  componentDidMount() {
    const state = JSON.parse(localStorage.getItem('reactState')) || {};
    if (state.isLogin) {
      this.setState({isLogin: state.isLogin});
    }
  }

  handleLogin = () => {
    this.setState({isLogin: true});
    localStorage.setItem("reactState", JSON.stringify({isLogin: true}));
  };

  handleLogOut = () => {    
    this.setState({isLogin: false});
    localStorage.removeItem("reactState");
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact={true} render={() => <ShowList isLogin={this.state.isLogin} handleLogOut={this.handleLogOut}/>} />
            <Route path="/login" exact={true} render={() => <Login isLogin={this.state.isLogin} handleLogin={this.handleLogin} />}/>
            <Route path="/:problemId" render={(props) => <ShowDetail isLogin={this.state.isLogin} id={props.match.params.problemId}/>} />
          </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
