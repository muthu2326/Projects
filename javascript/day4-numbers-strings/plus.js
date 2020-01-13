console.log('hello' + 'world') // concatenation

console.log('5' + 5) // '55'
console.log('5' + 5 + 2) // '552'
console.log(5 + 2 + '5') // '75'
console.log(5 + 2 + '5' + 7 + 3) // '7573'
console.log(5 + 2 + '5' + (7 + 3)) // '7510'

const source = 'bangalore'
const destination = 'mysore'
const kms = 150

//string concatenation
console.log('The distance between ' + source + ' and ' + destination + ' is ' + (kms + 12) + ' kms.')

// ES6 - template literals/template strings / string interpolation
console.log(`The distance between ${source} and ${destination} is ${kms + 12} kms.`)


const name = 'Arjun'
const city = 'bangalore'
const age = 21
const occupation = 'software developer'

console.log(name + ' lives in ' + city + '. He is ' + age + ' years old and works as a ' + occupation  )
console.log(`${name} lives in ${city}. He is ${age} years old and works as a ${occupation}`)

const person = {
    name: 'arjun',
    city: 'bangalore',
    age: 21,
    occupation: 'full stack developer'
}

console.log(`${person.name} lives in ${person.city}. He is ${person.age} old and works as a ${person.occupation}`)

const carItem = {
    id: 1,
    name: 'marker',
    price: 15,
    quantity: 2
}

console.log(`${carItem.name} | ${carItem.price} | ${carItem.quantity} | ${carItem.price * carItem.quantity}`)