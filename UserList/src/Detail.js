import React, { Component } from 'react';
import './App.css';

class Detail extends Component {
    render() {
      return (
        <div className="detail">
            {this.props.user.name && <p>name: {this.props.user.name}</p>}
            {this.props.user.location && <p>location: {this.props.user.location}</p>}
            {this.props.user.company && <p>company: {this.props.user.company}</p>}
            {this.props.user.following >= 0 && <p>following: {this.props.user.following}</p>}
            {this.props.user.followers >= 0 && <p>followers: {this.props.user.followers}</p>}
            {this.props.user.blog && <p>bio: {this.props.user.blog}</p>}
            {this.props.user.bio && <p>bio: {this.props.user.bio}</p>}
        </div>  
      );
    }
  }
  
  export default Detail;