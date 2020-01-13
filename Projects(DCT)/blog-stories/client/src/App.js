import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


import Home from './components/layout/Home'

import Story from './components/stories/Story'
import New from './components/stories/New'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends Component {

  constructor(){
    super()
    this.state = {
        topics: []
    }
}

  componentDidMount(){
    axios.get('http://localhost:3005/topics')
        .then(response => {
            this.setState(() => ({ topics: response.data}))
        })
        .catch(err => console.log(err))
}

  render() {
    return (
      <div>
      <BrowserRouter>
          <h2 className="ml-5" >Medium</h2>
          <nav className="navbar navbar-expand navbar-dark bg-dark m-5">
                {/* <Link className="navbar-brand" to="#">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Topics
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {this.state.topics.map((topic => {
                          return (
                            <Link key={topic._id} className="dropdown-item" to={`/view/${topic.name}`} > {topic.name} </Link>
                          )
                        }))}
                      </div>
                    </li>
                  </ul>
                </div>
          </nav>
          <Switch>
              <Route path="/view/:topic" component={ Story } exact= { true } />
              <Route path="/"  component={ Home } exact={ true } />
              <Route path="/new" component={ New } exact= { true } />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
