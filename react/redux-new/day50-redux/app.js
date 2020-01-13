const createStore = require('./store/configureStore')
const {addUser,removeUser,updateUser} = require('./actions/user')
const store = createStore()
store.subscribe(function(){
    console.log(store.getState())
    console.log("  ")
})

store.dispatch(addProject({ id: 1, name: 'FHQ' }))
store.dispatch(addProject({ id: 2, name: 'leadseed' }))
store.dispatch(addProject({ id: 3, name: 'pair coading' }))
store.dispatch(removeProject(2))

store.dispatch(addUser({ id:2, name: "dhoni" }))
store.dispatch(addUser({ id:3, name: "kohli" }))
store.dispatch(removeUser(3))
store.dispatch(updateUser( 2, { name: "MS dhoni" } ))