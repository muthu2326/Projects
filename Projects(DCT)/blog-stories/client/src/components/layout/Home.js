import React from 'react' 
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class Home extends React.Component{
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

    render(){
        return(<div class="container">
        <div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        </div>
        )
    }
}
export default Home