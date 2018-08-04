import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import '../App.css';
import Detail from './Detail';

class ShowUserDetail extends Component {
  render() {
    if(this.props.isLogin){
      return (
        <div className="userdetail">
          <h2>Detail:</h2>
          <Detail login={this.props.id}/>
        </div>
      );
    } else {
        return <Redirect to={{pathname: '/login'}}/>
    }
  }
}

export default ShowUserDetail;