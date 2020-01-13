import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ClientList = (props) => {
    return (
        <div>
            <h2> Listing Clients </h2>
            <ul>
                { props.clients.map(client => {
                    return (
                        <li key={ client.id }> <Link to={`/clients/${client.id}`}> { client.name } </Link> - { props.projects.filter(project => project.client === client.id).length }  </li>
                    )
                })}
            </ul>
            <p> <Link to="clients/new"> Add Client </Link></p>
        </div>
    )
}

// HOC - Higher Order Component - It will take the component created and gives additional functionalities to the component

const mapStateToProps = (state) => {
    return {
        clients: state.clients,
        projects: state.projects
    }
}

 // ClientList is called as Wrapped Component
export default connect(mapStateToProps)(ClientList)

