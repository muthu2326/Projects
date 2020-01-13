const redux = require('redux')
const { createStore, combineReducers } = redux
const userInitialState = [{ id:1, name: "sachin" }]
const usersReducer = (state = userInitialState , action ) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state,action.user]
        case 'UPDATE_USER':
            return state.map(user=>{
                    if(user.id==action.id){
                        return {...user,...action.user}
                    }else{
                        return {...user}
                    }
                })
        case 'REMOVE_USER':
            return state.filter(user => user.id != action.id)
        default:
            return[...state]
    }
}
const projectsInitialState = []
const projectsReducer = (state = projectsInitialState , action ) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.project]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.id != action.id)
        case 'UPDATE_PROJECT':
            return state.map(project=>{
                    if(project.id==action.id){
                        return {...project,...action.project}
                    }else{
                        return {...project}
                    }
                })
        default:
            return[...state]
    }
}
const store =createStore(combineReducers({
    user:usersReducer,
    projects:projectsReducer    
}))
store.subscribe(function(){
    console.log(store.getState())
    console.log("  ")
})
const addUser = (user) => {
    return {
        type:'ADD_USER',
        user
    }
}
const removeUser = (id) =>{
    return {
        type:'REMOVE_USER',
        id
    }
}
const updateUser = (id,user) => {
    return {
        type:'UPDATE_USER',
        user,
        id
    }
}
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
        id
    }
}
store.dispatch(addProject({ id: 1, name: 'FHQ' }))
store.dispatch(addProject({ id: 2, name: 'leadseed' }))
store.dispatch(addProject({ id: 3, name: 'pair coding' }))
store.dispatch(removeProject(2))
store.dispatch(updateProject( 3, { name: "coading" } ))
store.dispatch(addUser({ id:2, name: "dhoni" }))
store.dispatch(addUser({ id:3, name: "kohli" }))
store.dispatch(removeUser(3))
store.dispatch(updateUser( 2, { name: "MS dhoni" } ))

