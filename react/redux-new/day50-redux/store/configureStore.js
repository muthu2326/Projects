const redux = require('redux')
const { createStore, combineReducers } = redux
const usersReducer = require('../reducers/user')
const projectsReducer = require('../reducers/project')

module.exports = () => {
    return createStore(combineReducers({
        user:usersReducer,
        projects:projectsReducer    
    }))
}
   