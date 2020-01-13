import React from 'react'
import ClientForm from './Form'
import { connect } from 'react-redux'
import {editClient} from '../../actions/clients'

const EditClient = (props) => {
    const handleSubmit = (formData) => {
        props.dispatch(editClient(formData))
        props.history.push(`/clients/${formData.id}/`)
    }
    return (
        <div>
            <h2>Edit Form</h2>
            <ClientForm  handleSubmit={handleSubmit} client={props.client} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        client: state.clients.find(client => client.id == id)
    }
}

export default connect(mapStateToProps)(EditClient)