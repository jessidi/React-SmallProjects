import React, { Component } from 'react';
import List from './List';
import './App.css';

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
                        return <List key={item.id} {...item} displayUserDetail={this.props.displayUserDetail}/>;
                    })}
                </tbody>
            </table>
      );
    }
  }
  
  export default Table;