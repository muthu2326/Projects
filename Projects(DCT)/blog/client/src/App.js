import React from 'react';
import logo from './logo.svg';
import { MdHome, MdLibraryBooks, MdPermIdentity, MdViewList } from "react-icons/md";
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/home'
import Posts from './components/posts'
import ListAuthor from './components/listAuthors'
import PostShow from './components/postshow'
import AuthorShow from './components/authorShow'
import RandomPost from './components/randomPost'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar className="navbar" color="dark" expand="md">
            <img src={logo} className="App-logo" alt="logo" />
            <NavbarBrand>React blog</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <span><MdHome /> <Link to='/' className="link">Home&nbsp;&nbsp;&nbsp;</Link></span>
              <span><MdLibraryBooks/><Link to='/posts' className="link"> Posts&nbsp;&nbsp;&nbsp;</Link></span>
              <span><MdPermIdentity/><Link to='/author' className="link"> Authors&nbsp;&nbsp;&nbsp;&nbsp;</Link></span>
              <span><MdViewList/><Link to='/random' className="link"> Random post&nbsp;&nbsp;&nbsp;</Link></span>
            </Nav>
        </Navbar>

            <Switch>
              <Route path="/" component = {Home} exact={true}/>
              <Route path='/posts' component= {Posts} exact={true}></Route>
              <Route path='/author' component= {ListAuthor} exact={true}></Route>
              <Route path='/posts/:id' component ={PostShow}></Route>
              <Route path='/author/:id' component= {AuthorShow} exact={true}></Route>
              <Route path='/random' component= {RandomPost} exact={true}></Route>

            </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;