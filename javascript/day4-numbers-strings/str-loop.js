const city = 'bangalore'
let state = 'karnataka'
for(var i = 0; i < city.length; i++){
    console.log(city[i])
}

count = 0
for(var i = 0; i < city.length; i++){
    if(city[i] == 'a'){
        count++ // count += 1
    }
}

console.log(count)

// ES6 - for of iterator
let items = 0
for(let c of city) {    // c - is a variable 
    if( c == 'b'){
        items   ++
    }
}

console.log(items)

console.log(state.repeat(2))
console.log(state.search('n'))
state = state.replace('karnataka','UP')
console.log(state)