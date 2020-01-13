import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import ClientList from './components/clients/List'
import Dashboard from './components/dashboard/Dashboard'
import ClientNew from './components/clients/New'
import ClientShow from './components/clients/Show'

import ProjectList from './components/projects/List'
import ProjectNew from './components/projects/New'
import EditClient from './components/clients/Edit'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <h1> Task Box </h1>
        <ul>
          <li><Link to="/" > dashboard </Link></li>
          <li><Link to="/clients"> clients </Link></li>
          <li><Link to="/projects"> projects </Link></li>
        </ul>

        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/clients" component={ClientList}  exact={true} />
          <Route path="/clients/new" component={ClientNew} />
          <Route path="/clients/:id/edit" component={EditClient} />
          <Route path="/clients/:id" component={ClientShow} />

          <Route path="/projects" component={ProjectList} exact={true} />
          <Route path="/projects/new" component={ProjectNew} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>      
    );
  }
}

export default App;
