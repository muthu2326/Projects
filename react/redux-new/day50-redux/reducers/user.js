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
module.exports = usersReducer