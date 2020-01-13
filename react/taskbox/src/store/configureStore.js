 import { createStore, combineReducers } from 'redux'

 import clientReducers from '../reducers/clients'
 import projectReducers from '../reducers/projects'

const configureStore = () => {
    const store = createStore(combineReducers({
       clients: clientReducers,
       projects: projectReducers
    }))
    return store
}

export default configureStore