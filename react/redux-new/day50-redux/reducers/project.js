const projectsInitialState = []
const projectsReducer = (state = projectsInitialState , action ) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.project]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.id != action.id)
        default:
            return[...state]
    }
}
module.exports = projectsReducer