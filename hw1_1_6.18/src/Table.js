import React, {Component} from 'react';
import Row from './Row';

class Table extends Component {
  render() {
    const tableStyle = {
      'border-collapse': 'collapse',
      'margin': '30px auto'
    }
    return (
        <div>
            <table style={tableStyle}>
               {
                 this.props.array.map((row) => {
                  return <Row array={row}/>;
                 })
              }
            </table>
           
        </div>
    );
  }
}


export default Table;