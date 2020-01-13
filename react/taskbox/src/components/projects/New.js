import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../actions/projects'
import ProjetNewForm from './Form'

class ProjectNew extends React.Component{

    handleSubmit = (formData) => {
        console.log(formData)
        this.props.dispatch(addProject(formData))
        this.props.history.push("/projects")
    }   
    render(){
        return(
            <div>
                <h2>Add Client</h2>
                <ProjetNewForm handleSubmit={this.handleSubmit} clients={this.props.clients} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}
export default connect(mapStateToProps)(ProjectNew)

// only if you require any value from the store or state use mapStateToProps method and pass to the connect method otherwise not reqiured