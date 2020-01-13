export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        payload: project
    }
}

export const removeProject = (client) => {
    return {
        type: 'REMOVE_PROJECT',
        payload: {
            client
        }
    }
}