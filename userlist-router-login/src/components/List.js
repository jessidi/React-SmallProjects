import React, { Component } from 'react';
import '../App.css';
//import {withRouter} from "react-router-dom";


class List extends Component {
      getDetail = (login) => {
        const url = `/list/${login}`;
        this.props.history.push(url); 
      }

      render () {
        const imageStyle = {width: 100, height: 100};
        return (
          <tr onClick={() => this.getDetail(this.props.login)} >
            <td>{this.props.id}</td>
            <td>{this.props.login}</td>
            <td>
              <img style={imageStyle} src={this.props.avatar_url} alt={this.props.avatar_url}/>
            </td>
          </tr>
        );
      }
  }

  
export default List;
//export default withRouter(List);