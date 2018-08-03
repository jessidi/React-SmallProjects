import React, { Component } from 'react';
import Table from './Table';
import Detail from './Detail'; 
import './App.css';
import axios from 'axios'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: {}
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?per_page=100')
      .then(response => {
        //console.log(response);
        this.setState({data: response.data});
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  displayUserDetail = (login) =>{
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(response => {
        //console.log(response.data);
        this.setState({user: response.data});
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    return (
      <div className="App">

        <div className="left">
          <h2>List:</h2>
          <Table users={this.state.data} displayUserDetail={this.displayUserDetail} />
        </div>

        <div className="right">
          <h2>Detail:</h2>
          <Detail user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
