// npm install --save redux
// redux is not limited only to react it is also used with angular, vue.js and also for DOM manipulation , etc 

const redux = require('redux')
const { createStore } = redux

// console.log(redux) - redux has an object  - with properties such has below methods
// createStore: [Function: createStore],
// combineReducers: [Function: combineReducers],
// bindActionCreators: [Function: bindActionCreators],
// applyMiddleware: [Function: applyMiddleware],
// compose: [Function: compose],
// __DO_NOT_USE__ActionTypes:
//  { INIT: '@@redux/INITu.g.v.k.s.e',
//    REPLACE: '@@redux/REPLACEk.s.q.a.v.q',
//    PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION] } }

// console.log(createStore()) - error : Expected reducer to be a function 

// console.log(store)
// whener we invoke createStore method the below Object is returned
// { dispatch: [Function: dispatch],
//     subscribe: [Function: subscribe],
//     getState: [Function: getState],
//     replaceReducer: [Function: replaceReducer],
//     [Symbol(observable)]: [Function: observable] }

// reducer function
function countReducer(state = { count: 0 }, action){  // "ES6 default parameters" being used to set the value
  switch(action.type){
        case 'increment':
              return {
                count: state.count += 1
            }
        case 'decrement':
            return {
                count: state.count -= 1
            }
        case 'incrementBy':
            return {
                count: state.count += action.num
            }
        default:
            return{...state}
    }
}

// when we want multiple state values to be maintained we use combine reducers 
const store = createStore(countReducer)

store.subscribe(function(){
    console.log(store.getState())
})

function increment(){
    return {
        type: 'increment'
    }
}

function decrement(){
    return {
        type: 'decrement'
    }
}

function incrementBy(num){
    return {
        type: 'incrementBy',
        num
    }
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())


