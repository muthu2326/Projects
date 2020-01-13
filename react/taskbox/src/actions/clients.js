// add client

export const addClient = (client) => {
    return {
        type: 'ADD_CLIENT',
        payload: client
    }
}
// remove client
export const removeClient = (id) => {
    return {
        type: 'REMOVE_CLIENT',
        payload: {
            id
        }
    }
}
// edit client

export const editClient = (client) => {
    return {
        type: 'EDIT_CLIENT',
        payload: client
    }
}
// node 
//module.export = one === export default one
// module.exports = { one. two } === export one; export two