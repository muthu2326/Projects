import React from 'react'
import { connect } from 'react-redux'
const Dashboard = (props) => {
    return (
        <div>
            <h4> Listing clients - { props.clients.length }</h4>
            <h4> Listing projects - { props.projects.length }</h4>

            <h4> Recent clients </h4>
            <p> { props.clients[props.clients.length - 1 ].name } </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients,
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Dashboard)