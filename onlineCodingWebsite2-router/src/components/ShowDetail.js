import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {problem: {}, error: false};
    }

    componentDidMount() {
        axios
        .get(`http://api.haochuan.io/oj/problems/${this.props.id}`)
        .then((res) => {
            this.setState({problem: res.data.question});
        })
        .catch((err) => {
            this.setState({error: true});            
            console.log(err);
        });
    }

    render() {
      if(this.props.isLogin) {
        return (
            <div className="showDetail">
                {this.state.problem && <h1 className="problemDetail">{this.state.problem.title}</h1>}
                {this.state.problem && <h3>{this.state.problem.content}</h3>}
                { this.state.error === true &&  <p className="error">Something wrong happened in the server</p> }
            </div>
          );
      } else {
            return <Redirect to={{pathname: "/login"}}/>
      }  
    }
  }
  
  export default ShowDetail;
  