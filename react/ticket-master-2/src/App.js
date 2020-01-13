import React from 'react';
import './App.css';

// npm install --save axios
// const axios = require('axios') - nodes-express way of importing
import axios from 'axios' // - react way of importing

class App extends React.Component {   // -App , Component --> Pascal casing
  constructor(){
    console.log('constructor')
    super()
    this.state = {
      tickets: []
    }
  }

  // this is a life cycle method
  // componentWillMount(){ // pre render
  //   console.log('3 . component will method')
  // }

  componentDidMount(){ // post render
    console.log('4 . component did method')

    // api calls are done inside this method
    //api get calls
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=5d1e0438d00828fc')
      .then(response => {
//        console.log(response.data)
        // update state needs to be via the setState method
        // must always return a new object
        // when the state value updates, the render method is called
        this.setState(() => ({ tickets: response.data }))
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('render method')
    return (
      <div>
      <h1>Ticket Master</h1>
        <h2> Listing Tickets - { this.state.tickets.length } </h2>
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
                <td>{ ticket.status } </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <br />
        <label>
              Name : 
              <input type='text' />
          </label>
          <label><br/>
              Department: 
              <input type='text' />
          </label><br/>
          <label>
              Priority
              <input type='radio' name='status' value="High"/>High
              <input type='radio' name='status' value="Medium"/>Medium
              <input type='radio' name='status' value="Low"/>Low
          </label><br/>
          <label>
              Message
              <textarea></textarea>
          </label><br/>
          <label>
            <button>Submit</button>
            <button>Reset</button>
          </label><br/>
      </div>
    )
  }        
}

export default App;




