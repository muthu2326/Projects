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

module.exports = usersReducer