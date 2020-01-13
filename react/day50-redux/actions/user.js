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

module.exports = {
    addUser,
    removeUser,
    updateUser
}