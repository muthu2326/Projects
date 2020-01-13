import React from 'react'
import axios from 'axios'

import MyEditor from '../stories/MyEditor'
import Multiselect from 'multiselect-dropdown-react';

class New extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            topics: [],
            title: '',
            values: ''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3005/topics')
            .then(response => {
                this.setState(() => ({topics: response.data}))
            })
            .catch(err => console.log(err))
    }

    onSubmit = () => {

    }
    result(params) {
        this.setState(() => ({ values: params}))
        console.log(params);
    }

    render(){
        const data = [{
            name: 'one',
            value: 'one'
          },
          {
              name: 'two',
              value: 'two'
            },
            {
              name: 'three',
              value: 'three'
            },
            {
              name: 'four',
              value: 'four'
            },
            {
              name: 'five',
              value: 'five'
            },
            {
              name: 'six',
              value: 'six'
            }];
        return(
            <div>
            <form onSubmit={this.onSubmit}>
            <br/>
                <select>
                    <option>select</option>
                    { this.state.topics.map(topic => {
                        return(
                            <option key={ topic._id} value={ topic.name}>{topic.name} </option>
                        )
                    })}
                </select><br/><br/>
                <input type="text" placeholder='Title' /> <br/><br/>
                <MyEditor /> <br/><br/>
                <input type='checkbox' />isPublished <br/><br/>
                <input type='date' />
                <br/><br/>
                <label>tags</label>
                <Multiselect options={data} onSelectOptions={this.result.bind(this)} />
                    <br/><br/>

                </form>
            </div>
        )
    }
}
export default New