import React, {Component} from 'react';
import Table from './Table';

class Content extends Component {
  render() {
        const contentStyle = {
            position: 'fixed',
            top: 50,
            bottom: 50,
            width: '100%',
            'background-color': '#FFC0CB',
            overflow: 'auto'
        }
        const array = [
            ['', 'Knocky', 'Flor', 'Ella', 'Juan'], 
            ['Breed', 'Jack Russell', 'Poodle', 'Streetdog', 'Cocker Spaniel'],
            ['Age', '16', '9', '10', '5'],
            ['Owner', 'Mother-in-law', 'Me', 'Me', 'Sister-in-law'],
            ['Eating Habits', 'Eats everyone\'s leftovers', 'Nibbles at food', 'Hearty eater', 'Will eat till he explodes']
        ];
    return (
        <div style={contentStyle}>
            <Table array={array}/>
        </div>
    );
  }
}

export default Content;