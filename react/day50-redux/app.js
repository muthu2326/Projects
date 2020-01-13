const redux = require('redux')
const  createStore  = require('./store/configureStore')

const { addUser, removeUser, updateUser } = require('./actions/user')
const { addProject, removeProject, updateProject } = require('./actions/project')

const store = createStore()

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser({ id: 2, name: 'kavya'}))
store.dispatch(addProject({id: 1, name: 'pair coding'}))