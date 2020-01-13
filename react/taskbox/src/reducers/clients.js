

const clientInitialState = []
const clientReducers = (state = clientInitialState, action) => {
    switch(action.type){
        case 'ADD_CLIENT' : 
            return [ ...state, action.payload]
        case 'EDIT_CLIENT': 
            return state.map(client =>{
                if(client.id == action.payload.id){
                    return { ...client, ...action.payload }
                }else{
                    return { ...client }
                }
            })
        case 'REMOVE_CLIENT':
        return state.filter(client => client.id != action.payload.id)
            default:
            return [ ...state ] // ES6 spread operator
            // return [].concat(state)  ES5 
     }
}

export default clientReducers