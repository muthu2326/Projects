import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Jumbotron} from 'reactstrap';

class Home extends React.Component{
    render(){
        return (
            <div>
                <Jumbotron>
                    <div align="center" >
                        <h2 className="home">Welcome to My Blog</h2>
                    </div>
                    <img src={logo} className="home-logo" align='center' alt="logo" />
                </Jumbotron>
            </div>
            
        )
    }
}

export default Home