// Our own way of implementing redux - below is not redux 

// redux termenologies

/* 
store
dispatch
state
action
action generators
reducers
combine reducers
thunk
*/

function createStore(){
    return {
        state: {
            count: 0
        },
        getState: function(){
            return this.state
        },
        dispatch: function(action){     // the function used in the dispatch method is called a reducer
            switch(action.type){
                case 'INCREMENT': 
                    this.state.count++
                    break
                case 'DECREMENT': 
                    this.state.count--
                    break
                case 'RESET': 
                    this.state.count = 0
                    break
                case 'INCREMENT_BY': 
                    this.state.count += action.num
                    break
                case 'DECREMENT_BY':
                    this.state.count -= action.num
                    break
                default:
                    this.state
            }
            return this.state
        }
    }
}

// here this functions are used for action because it returns an error if the arg of dispatch method is wrong


// Other way of doing the same - all the action type value are stored in variable and assigned in the action generator
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'

// function increment(){
//     return { type: INCREMENT } 
// }

// function decrement(){
//     return { type: DECREMENT }
// }

// function reset(){
//     return { type: RESET }
// }

// In redux terms - a functions which returns an action is called an action generators
function increment(){
    return { type: 'INCREMENT' }    // the object returned by action generator is called an 'action'
}

function decrement(){
    return { type: 'DECREMENT' }
}

function reset(){
    return { type: 'RESET' }
}

function incrementBy(num){
    return {
        type: 'INCREMENT_BY',
        num
    }
}

function decrementBy(num){
    return {
        type: 'DECREMENT_BY',
        num
    }
}
const store = createStore()

console.log(store.getState())

console.log(store.dispatch(increment()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(incrementBy(5)))
console.log(store.dispatch(decrement()))
console.log(store.dispatch(decrementBy(2)))
console.log(store.dispatch(reset()))
