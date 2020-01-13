// hoisting - moving variables to the top in memory(only variables names not values)

//var keyword - your variables are hoisted

//var city 
console.log(city)
var city = 'banaglore'
console.log(city)

// let or const based variables are not hoisted

//ReferenceError: city1 is not defined
//console.log(city1)
const city1 = 'mysore'
console.log(city1)