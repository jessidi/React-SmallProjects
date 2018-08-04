import React, { Component } from 'react';
import '../App.css';
import Detail from './Detail';

class ShowUserDetail extends Component {
 render () {
  return (
    <div className="userdetail">
      <h2>Detail:</h2>
      <Detail login={this.props.match.params.id}/>
    </div>
    );
  }
}
export default ShowUserDetail;