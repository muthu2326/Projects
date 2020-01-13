import React from 'react'
import ClientForm from './Form'
import { connect } from 'react-redux'
import { addClient } from '../../actions/clients'

class ClientNew extends React.Component{

    handleSubmit = (formData) => {
        this.props.dispatch(addClient(formData))
        this.props.history.push("/clients")
    }   
    render(){
        return(
            <div>
                <h2>Add Client</h2>
                <ClientForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default connect()(ClientNew)

// only if you require any value from the store or state use mapStateToProps method and pass to the connect method otherwise not reqiured