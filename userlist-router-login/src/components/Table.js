import React, { Component } from 'react';
import List from './List';
import {withRouter} from "react-router-dom";

import '../App.css';

const WithRouterList = withRouter(List);

class Table extends Component {

    render() {
      return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((item) => {
                        return <WithRouterList key={item.id} {...item}/>;
                    })}
                </tbody>
            </table>
      );
    }
  }
  
  export default Table;