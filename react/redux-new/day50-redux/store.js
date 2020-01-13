const redux = require('redux')
const { createStore } = redux
function countReducer(state = { count: 0 }, action ){
    switch(action.type){
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement':
            return {
                count: state.count - 1
            }
        case 'incrementBy':
            return {
                count: state.count + action.num
            }
        default:
            return{
                ...state
            }
    }
}
const store =createStore(countReducer)
store.subscribe(function(){
    console.log(store.getState())
})
function increment(){
    return {
        type:'increment'
    }
}
function decrement(){
    return {
        type:'decrement'
    }
}
function incrementBy(num){
    return {
        type:'incrementBy',
        num
    }
}
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(incrementBy(10))