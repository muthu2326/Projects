import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import uuid from 'uuid'

import configureStore from './store/configureStore'
import { addClient } from './actions/clients'
import { addProject } from './actions/projects'


const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
)

const client = { id: uuid(), name: 'ramu'}
store.dispatch(addClient(client))

store.dispatch(addProject({
    id: uuid(),
    title: 'FHQ',
    client: client.id
}))

ReactDOM.render(app, document.getElementById('root'));

