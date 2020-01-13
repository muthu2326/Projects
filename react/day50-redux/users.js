const redux = require('redux')
const { createStore, combineReducers } = redux

const usersInitialState = [{ id: 1, name: 'rahul' }]
const usersReducer = (state = usersInitialState, action) => {
    switch(action.type){
        case 'ADD_USER' :
            return [ ...state, action.user ]
        case 'REMOVE_USER' :
            return state.filter(user => user.id != action.id)
        case 'UPDATE_USER' :
            return state.map(user => {
                if(user.id == action.id){
                    return { ...user, ...action.user}
                }else{
                    return {...user}
                }
            })
        default:
            return [ ...state]
    }
}

const projectsInitialState = []
const projectsReducer = (state = projectsInitialState, action) => {
    switch(action.type){
        case 'ADD_PROJECT' :
            return [ ...state, action.project]
        case 'REMOVE_PROJECT' :
            return state.filter(project => project.id != action.id)
        case 'UPDATE_PROJECT' : 
            return state.map(project => {
                if(project.id == action.id){
                    return { ...project, ...action.project}
                }else {
                    return { ...project}
                }
            })
        default:
            return [ ...state]
    }
}

const store = createStore(combineReducers({
    users: usersReducer,
    projects: projectsReducer
}))

store.subscribe(function(){
    console.log(store.getState())
})

// adding an user
const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
}
// updating an user
const updateUser = (id, user) => {
    return {
        type: 'UPDATE_USER',
        id,
        user
    }
}
// removing an user
const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        id
    }
}
store.dispatch(addUser( { id: 2, name: 'nagesh'} ))
store.dispatch(addUser( { id: 3, name: 'kavya'} ))
store.dispatch(updateUser(1, { name: 'ramesh'}))
store.dispatch(removeUser(1))

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

store.dispatch(addProject({ id: 1, name: 'FHQ' }))
store.dispatch(addProject({ id: 2, name: 'pair coding'}))
store.dispatch(addProject({ id: 3, name: 'leadseed'}))

store.dispatch(removeProject(3))

store.dispatch(updateProject(2, { name: 'pair programming'}))

console.log(store.getState())