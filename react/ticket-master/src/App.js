import React from 'react';
import './App.css';

//        console.loimport React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap'


import TicketForm from './TicketFrom'

// npm install --save axios
// const axios = require('axios') - nodes-express way of importing
import axios from 'axios' // - react way of importing

class App extends React.Component {   // -App , Component --> Pascal casing
  constructor(){
    super()
    this.state = {
      tickets: [],
      max: 0,
      value: 0
    }
  }

  // this is a life cycle method
  // componentWillMount(){ // pre render
  //   console.log('3 . component will method')
  // }

  componentDidMount(){ // post render
    // api calls are done inside this method
    //api get calls
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=5d1e0438d00828fc')
      .then(response => {

    ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

        // update state needs to be via the setState method
        // must always return a new object
        // when the state value updates, the render method is called
        this.setState(() => ({ tickets: response.data }))
//        console.log(this.state)
      })
      .catch(err => {
  //      console.log(err)
      })
  }

    addition = (ticket) => {
        this.state.tickets.push(ticket)
        this.setState(()=> ({ }))
    }

    handleSearch = (e) => {
      const value = e.target.value
      this.setState((prevState) => ({ tickets: prevState.tickets.filter((ticket) => {
        return Object.values(ticket).join('').includes(value)
      })
      }))
    }

    handleProgessBar = () => {
      const value = this.state.tickets.filter((ticket => ticket.status === 'open'))
      console.log(value.length)
      const max = this.state.tickets.length
      this.setState(() => ({max, value: value.length }))
      console.log(this.state.value)
    }
    
    handleStatusUpdate = (code) => {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=5d1e0438d00828fc/:code')
    }

  render() {
    return (
      <div onafterprint={this.state.handleProgessBar}>
      <h1>Ticket Master</h1>
        <h2> Listing Tickets - { this.state.tickets.length } </h2>
        <br/>
        <input type='text' placeholder='search' onChange={this.handleSearch} /> 
        <br/>
        <br/>

        <table border="1">
          <thead align="center">
          <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Department</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody align="center">
          { this.state.tickets.map(ticket => {
            return (
              <tr key={ ticket.ticket_code }> 
                <td>{ ticket.ticket_code } </td>
                <td>{ ticket.name } </td>
                <td>{ ticket.department } </td>
                <td>{ ticket.message } </td>
                <td> <input type='checkbox' value={ticket.status} onClick={this.handleStatusUpdate(ticket.ticket_code)} /> </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <br/>
        <div className="text-center">25%</div>
          <Progress value="25" />

              <br/> <br/>
        <TicketForm addition={this.addition}/>
      </div>
    )
  }        
}

export default App;




