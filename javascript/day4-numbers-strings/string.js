const password = 'secrect123'
let city = 'bangalore'

console.log(password.length)    // 9    length is property not method
console.log(city.toUpperCase()) // 'BANGALORE'
console.log(city)


// primitve string to Object string

console.log(typeof(password))   //'string'


city = city.toUpperCase()
console.log(city)   //'BANGALORE'

const firstName = 'Arjun'
console.log(firstName.toLowerCase())    // 'arjun'

const sentence = 'hello world'
console.log(sentence.indexOf('w'))  // 6
console.log(sentence.indexOf(' ')) // 5

console.log(sentence.indexOf('l'))  // 2
console.log(sentence.indexOf('z'))  // -1 for char not present
console.log(sentence.lastIndexOf('l'))  // 9

console.log(sentence.charAt(1))  // 'e'
console.log(sentence[1])    // 'e'