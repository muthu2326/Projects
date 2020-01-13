import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectItem from '../projects/Item'
import { removeClient } from '../../actions/clients'
import { removeProject } from '../../actions/projects'

const ClientShow = (props) => {
    const { client } = props
    return (
        <div>
           <h2> { client.name } </h2>
           <h3> Listing Projects </h3>
           <ul>
               { props.projects.map(project =>  <ProjectItem title={ project.title } key={ project.id } /> )}
           </ul>

            <Link to={ `/clients/${client.id}/edit`}>Edit</Link>
           <button onClick={() => {
               const confirmDelete = window.confirm('Are you sure?')
               if(confirmDelete){
                   props.dispatch(removeClient(client.id))
                   props.dispatch(removeProject(client.id))
                   props.history.push('/clients')
               }
           }}>
            remove
           </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        client: state.clients.find(client => client.id == id),
        projects: state.projects.filter(project => project.client == id)
    }
}
export default connect(mapStateToProps)(ClientShow)

