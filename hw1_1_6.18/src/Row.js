import React, {Component} from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    return (
            <tr>
              {
                this.props.array.map((cell) => {
                    return <Cell text={cell} />
                })
              }
            </tr>
    );
  }
}

export default Row;