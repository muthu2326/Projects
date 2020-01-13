const projectInitialState = []
const projectReducers = (state = projectInitialState, action) => {
    switch(action.type){
        case 'ADD_PROJECT' :
            return [ ...state, action.payload]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.client != action.payload.client)
        default:
            return [ ...state ]
    }
}

export default projectReducers