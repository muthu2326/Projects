import React from 'react';
import axios from 'axios' // - react way of importing
import { Button } from 'reactstrap'


class TicketForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      department: '',
      priority: '',
      message: ''
    }
  }

  handleName = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
  }


  handleDepartment = (e) => {
    const department = e.target.value
    this.setState(() => ({ department }))
  }


  handlePriority = (e) => {
    const priority = e.target.value
    this.setState(() => ({ priority }))
  }


  handleMessage = (e) => {
    const message = e.target.value
    this.setState(() => ({ message }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: e.target[0].value,
      department: e.target[1].value,
      priority: e.target[2].value,
      message: e.target[3].value
    }

    // console.log(formData)
    axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=5d1e0438d00828fc', formData)
      .then((response) => {
        this.props.addition(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }


  render() {
    return (
      <div>
        <div>
          <Button outline color="primary">primary</Button>{' '}
          <Button outline color="secondary">secondary</Button>{' '}
          <Button outline color="success">success</Button>{' '}
          <Button outline color="info">info</Button>{' '}
          <Button outline color="warning">warning</Button>{' '}
          <Button outline color="danger">danger</Button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
                  <input type='text' onChange={this.handleName} />
          </label>
          <label><br />
            Department:
                  <select nChange={this.handleDepartment}>
              <option value='Techinacal'>Techinacal</option>
              <option value='Sales'>Sales</option>
              <option value='Marketing'>Marketing</option>
            </select>
          </label><br />
          <label>
            Priority
                  <select nChange={this.handlePriority}>
              <option value='High'>High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
            </select>
          </label><br />
          <label>
            Message
                  <textarea nChange={this.handleMessage}></textarea>
          </label><br />
          <label>
            <input type='submit' />
            <button>Reset</button>
          </label><br />
        </form>
      </div>
    )
  }
}

export default TicketForm;