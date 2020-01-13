function createStore(){
    return{
        state:{
            count:0
        },
        getState:function(){
            return this.state
        },
        dispatch:function(action){
            switch(action.type){
                case 'INCREMENT':
                    this.state.count++
                    break
                case 'DECREMENT':
                    this.state.count--
                    break
                case 'RESET':
                    this.state.count=0
                    break
                case 'INCREMENT_BY':
                    this.state.count+=action.num
                    break
                case 'DECREMENT_BY':
                    this.state.count-=action.num
                    break
                default:
                    this.state
                    break
            }
            return this.state
        }
    }
}
const store = createStore()
console.log(store.getState())
const INCREMENT='INCREMENT'

//action generator
function increment(){
    return {type: INCREMENT}//action
}
function decrement(){
    return {type:'DECREMENT'}//action
}
function reset(){
    return {type:'RESET'}//action
}
function incrementby(num){
    return {
        type:'INCREMENT_BY',
        num
    }//action
}
function decrementby(num){
    return {
        type:'DECREMENT_BY',
        num
    }//action
}
console.log(store.dispatch(increment()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(reset()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(decrement()))
console.log(store.dispatch(incrementby(10)))
console.log(store.dispatch(decrementby(5)))
