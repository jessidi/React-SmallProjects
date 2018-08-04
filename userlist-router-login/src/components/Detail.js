import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'; 
import {withRouter} from "react-router-dom";

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {user: {}};
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/${this.props.login}`)
    .then(response => {
      this.setState({user: response.data});
    })
    .catch(err => {
      console.log(err);
      alert(err);
    });
  }

  goBack = () => {
    this.props.history.push('/list'); 
  };

    render() {
      return (
        <div className="detail">
            {this.state.user.name && <p>name: {this.state.user.name}</p>}
            {this.state.user.location && <p>location: {this.state.user.location}</p>}
            {this.state.user.company && <p>company: {this.state.user.company}</p>}
            {this.state.user.following >= 0 && <p>following: {this.state.user.following}</p>}
            {this.state.user.followers >= 0 && <p>followers: {this.state.user.followers}</p>}
            {this.state.user.blog && <p>bio: {this.state.user.blog}</p>}
            {this.state.user.bio && <p>bio: {this.state.user.bio}</p>}
            <button className="goback" onClick={this.goBack} >Go back</button>
        </div>  
      );
    }
  }
  
  export default withRouter(Detail);