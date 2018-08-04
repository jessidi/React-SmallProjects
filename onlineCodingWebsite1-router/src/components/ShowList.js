import React, {Component} from 'react';
import axios from 'axios';
import List from './List';

class ShowList extends Component {

    constructor(props){
        super(props);
        this.state = {problems: [], error: false};
    }

    componentDidMount() {
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
      return (
        <div className="problems">
            <h1 className="title">Problems</h1>
            <List problems={this.state.problems} error={this.state.error}/>
        </div>
      );
    }
  }
  
  export default ShowList;
  