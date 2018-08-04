import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import '../App.css';
import axios from 'axios'; 
import Table from './Table';

class UserList extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        users: [],
      };
    }
  
    componentDidMount() {
      axios
        .get('https://api.github.com/users?per_page=100')
        .then(response => {
          this.setState({users: response.data});
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    }


    render() {
        if(this.props.isLogin){
            return (
              <div className="userlist">
                <h2>List:</h2>
                <Table users={this.state.users} />
              </div>
            );
        } else {
            return <Redirect to={{pathname: '/login'}}/>
        }
    }
  }
  
export default UserList;