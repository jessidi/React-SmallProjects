import React, {Component} from 'react';
import { Redirect} from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render() {
        if(this.props.isLogin){
            return <h1 className="home">Home page</h1> 
        } else {
            return <Redirect to={{pathname: '/login'}}/>
        }
    }
}

export default Home;

