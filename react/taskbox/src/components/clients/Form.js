import React from 'react'
import uuid from 'uuid'

class ClientForm extends React.Component{
    constructor(props){
        console.log('props', props)
        super(props)
        this.state = {
            id: props.client ? props.client.id : uuid(),
            name: props.client ? props.client.name : ''
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('nextprops, prevstate', nextProps, prevState)
    //     if(nextProps.client.name !== prevState.name){
    //         return {
    //             id: nextProps.client.id,
    //             name: nextProps.client.name
    //         }
    //     }else {
    //         return null
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: this.state.id,
            name: this.state.name
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
            <div>
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type="text" value={this.state.name   } onChange={this.handleChange} name="name" />
                </label>
                <input type="submit" />
            </form>
        </div>
        )
    }
}

export default ClientForm