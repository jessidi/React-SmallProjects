import React from 'react';
import './App.css';
   function List (props) {
    const imageStyle = {width: 100, height: 100};

    return (
      <tr onClick={() => {props.displayUserDetail(props.login)}}>
        <td>{props.id}</td>
        <td>{props.login}</td>
        <td>
          <img style={imageStyle} src={props.avatar_url} alt={props.avatar_url}/>
        </td>
      </tr>
    );
  }

export default List;