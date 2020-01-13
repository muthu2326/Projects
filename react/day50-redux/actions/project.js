const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

const removeProject = (id) => {
    return {
        type: 'REMOVE_PROJECT',
        id
    }
}

const updateProject = (id, project) => {
    return  {
        type: 'UPDATE_PROJECT',
        id,
        project
    }
}

module.exports = {
    addProject,
    removeProject,
    updateProject
}