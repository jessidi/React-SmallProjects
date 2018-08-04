import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';

class ShowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {problem: {}, error: false};
    }

    componentDidMount() {
        const id = this.props.match.params.problemId;
        axios
        .get(`http://api.haochuan.io/oj/problems/${id}`)
        .then((res) => {
            this.setState({problem: res.data.question});
        })
        .catch((err) => {
            this.setState({error: true});            
            console.log(err);
        });
    }

    render() {
      return (
        <div className="showDetail">
            {this.state.problem && <h1 className="problemDetail">{this.state.problem.title}</h1>}
            {this.state.problem && <h3>{this.state.problem.content}</h3>}
            { this.state.error === true &&  <p className="error">Something wrong happened in the server</p> }
        </div>
      );
    }
  }
  
  export default ShowDetail;
  