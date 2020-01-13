import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectItem from '../projects/Item'

const ProjectList = (props) => {
    return (
        <div>
            <h2> Listing Projects </h2>
            <ul>
                { props.projects.map(project => {
                    return (
                        <ProjectItem title={ project.title } key={ project.id } />
                    )
                })}
            </ul>
            <p> <Link to="projects/new"> Add Project </Link></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        clients: state.clients
    }
}

 // ProjectList is called as Wrapped Component
export default connect(mapStateToProps)(ProjectList)

