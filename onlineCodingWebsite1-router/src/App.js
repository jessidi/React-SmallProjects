import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={ShowList} />
          <Route path="/:problemId" component={ShowDetail} />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
