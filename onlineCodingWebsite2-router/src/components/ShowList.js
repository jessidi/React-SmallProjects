import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import List from './List';

class ShowList extends Component {

    constructor(props){
        super(props);
        this.state = {problems: [], error: false};
    }

    componentDidMount = () => {
        axios
        .get('http://api.haochuan.io/oj/problems')
        .then((res) => {
            this.setState({problems: res.data.questions});
        })
        .catch((err) => {
            this.setState({error: true});
            console.log(err);
        });
    }

    render() {
      if(this.props.isLogin) {
        return (
            <div className="problems">
                <h1 className="title">Problems</h1>
                <List problems={this.state.problems} error={this.state.error}/>
                <button className="logout" onClick={this.props.handleLogOut}>Logout</button>
            </div>
          );
      }else {
          return <Redirect to={{pathname: "/login"}}/>
      }
    }
  }
  
  export default ShowList;
  