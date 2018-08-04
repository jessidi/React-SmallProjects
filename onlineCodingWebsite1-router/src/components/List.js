import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class List extends Component {

    getProblemDetail = (id) => {
        const url = `/${id}`;
        console.log('clicked');
        this.props.history.push(url);
    }

    render() {        
      return (
        <ul className="problemList">
            {   
                this.props.problems.length === 0 ? <li className="nodata">No Data</li> : 
                this.props.problems.map(( problem, index ) => {
                    return <li key={index} onClick={() => this.getProblemDetail(problem.id)}>{problem.title}</li>;
                })
             }
             { this.props.error === true &&  <p className="error">Something wrong happened in the server</p> }
        </ul>
        
      );
    }
  }
  
  export default withRouter(List);
  