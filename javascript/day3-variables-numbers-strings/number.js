const minTemperature = 12.3
const maxTemperature = 28

console.log(typeof minTemperature) // 'number'
console.log(typeof maxTemperature) // 'number'

// primitive data type and non primitive datatype or object type

// number is a primitive datatype

console.log(minTemperature)
console.log(Math.pow(2,3))  // 8
console.log(Math.sqrt(9)) // 3
console.log(Math.abs(-10)) //10
console.log(Math.ceil(12.4)) // 13
console.log(Math.floor(12.9)) // 12
console.log(Math.round(13.6)) // 14
console.log(Math.round(12.1)) // 12
console.log(Math.random()) // 0 (inclusive) to 1 (exclusive)

//function overloading - when a function or method accepts variable number of arguments

console.log(Math.min(12,32,1,45,6))  // 1
console.log(Math.min(10,20))  // 10
console.log(Math.max(12,32,1,45,6))  // 45


console.log(Math.round(minTemperature)) //12
console.log(minTemperature)

// overriding is not there in javascript since there are no datatypes similar to OOPS