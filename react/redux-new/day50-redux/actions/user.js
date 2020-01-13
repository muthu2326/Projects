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
module.exports = {
    addUser,removeUser,updateUser
}