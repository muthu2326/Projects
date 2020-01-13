// falsy values - false, 0, undefined, '', null,
// truthy values - everthing else which is not falsy  is truthy in javascript

const values = [true, false, 0, -1,undefined, '', 'dct academy',{}, [], [10, 20], {name: 'dct'}, null, -1]

for(let i = 0 ; i < values.length; i++){
    if(values[i]){
        console.log('truthy', values[i])
    }else{
        console.log('falsy', values[i])
    }
}