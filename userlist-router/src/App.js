import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import ShowUserDetail from './components/ShowUserDetail';
import Header from './components/Header';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/users" component={UserList} />
            <Route path="/users/:id" component={ShowUserDetail} />
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;