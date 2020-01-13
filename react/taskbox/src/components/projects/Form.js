import React from 'react'
import uuid from 'uuid'

class ProjectNewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: uuid(),
            title: '',
            client: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: this.state.id,
            title: this.state.title,
            client: this.state.client
        }
        this.props.handleSubmit(formData)
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
 
    render(){
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>
                title
                    <input type="text" name="title" onChange={this.handleChange} />
                </label><br/>
               <label>
                   client
                   <select value={this.state.clients} onChange={this.handleChange} name="client">
                       <option>select</option>
                        { this.props.clients.map(client => {
                            return <option key={client.id} value={client.id}> { client.name } </option>
                        })}
                   </select>
               </label><br/>
               
                <input type='submit' />
            </form>
        )
    }
}

export default ProjectNewForm