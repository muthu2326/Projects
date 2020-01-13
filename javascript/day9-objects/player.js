// arrays are ordered, integer indexed, collection of values

// objects are unordered, string indexed, collection of values

// creating object using {} brackets
const player = {
    firstName: 'sachin',
    lastName: 'Tendulkar'
}

// reading a prop value from an object using .(dot) operator and square brackets
console.log(player.firstName)
console.log(player['firstName'])

// updating a prop value  in object
player.firstName = 'Sachin Ramesh'
console.log(player)

// if u want add a new prop to an object
// create a new key and assign a value to it
player.coutry = 'india'
console.log(player)

// remove a prop from an object
delete player.lastName
console.log(player)

// find out all the keys in an object
console.log(Object.keys(player))

// find out all the values in an object
console.log(Object.values(player))

// to check if a prop exists in an object
console.log(player.state) // if it returns undefined that means to say state is not property of object

console.log(Object.keys(player).includes('state')) // returns true or false

console.log(Object.keys(player).indexOf('state')) // returns 0 or >1 if present or -1 if its not present

// creating object using 'new keyword'
const dravid = new Object()