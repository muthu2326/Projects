const removeProject = (id) =>{
    return {
        type:'REMOVE_PROJECT',
        id
    }
}
const addProject = (project) => {
    return {
        type:'ADD_PROJECT',
        project
    }
}
const updateProject = (id,project) => {
    return {
        type:'UPDATE_PROJECT',
        project,
        id//payload
    }
}
module.exports = {
    addProject,removeProject,updateProject
}