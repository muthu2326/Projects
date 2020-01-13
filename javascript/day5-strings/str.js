const city = 'bangalore'

// slice() mehod

console.log(city.slice(0,4))    // 'bang'
console.log(city.slice(2,4))    // 'ng'
console.log(city.slice(1))      // 'angalore'


const name = 'nithin'
console.log(name[0].toUpperCase() + name.slice(1).toLowerCase())

console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())


//  split() method
const names = 'mahesh, rajesh, suresh, veeresh'
console.log(names.split(', '))
console.log(names.split('')) // returns array of characters


const places = 'bangalore - mangalore - hassan'
console.log(places.split(' - '))
console.log(places.split(', ')) // returns a array [ 'bangalore - mangalore - hassan' ] of single string
