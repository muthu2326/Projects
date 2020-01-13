const redux = require('redux')
const { createStore, combineReducers } = redux

const usersReducer = require('../reducers/users')
const projectsReducer = require('../reducers/projects')

module.exports = () => {
    return createStore(combineReducers({
        users: usersReducer,
        projects: projectsReducer
    }))
}