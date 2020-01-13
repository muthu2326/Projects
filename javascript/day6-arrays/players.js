// Array - an array is an ordered integer indexed collection of values
let players = []
console.log(players)

players = ['dhoni', 'sachin', 'virat']
console.log(players)


console.log(players[0]) // 'dhoni'
console.log(players[1]) //  'sachin'
console.log(players[2]) //  'virat'
console.log(players[3]) //  'undefined'

let fruits = ['apple', 'watermelon', 'mango']
console.log(fruits)

const mixedArray = ['bangalore', 28.5, { }, ['mg road', 'brigade road'], true, function(){}]

let products = new Array()
console.log(products)


// determine if array is empty or not
if(players.length == 0){
    console.log('array is empty')
}else{
    console.log('array is not empty')
}

console.log(players)        //[ 'dhoni', 'sachin', 'virat' ]

players.push('zaheer')  
console.log(players)    // // [ 'dhoni', 'sachin', 'virat', 'zaheer' ]

players.push('laxman','anil') 
console.log(players)    // //[ 'dhoni', 'sachin', 'virat', 'zaheer', 'laxman', 'anil' ]

players.unshift('rahul')
console.log(players)    // [ 'rahul', 'dhoni', 'sachin', 'virat', 'zaheer', 'laxman', 'anil' ]

// to add a t specific index
players.splice(2,0,'shewag')
console.log(players)    // [ 'rahul', 'dhoni', 'shewag', sachin', 'virat', 'zaheer', 'laxman', 'anil' ]

//remove from end
players.pop()
console.log(players)    // [ 'rahul', 'dhoni', 'shewag', 'sachin', 'virat', 'zaheer', 'laxman' ]


//remove from begining
players.shift()
console.log(players)    //[ 'dhoni', 'shewag', 'sachin', 'virat', 'zaheer', 'laxman' ]

// rmeove from specific index
players.splice(2,1)
console.log(players)    // [ 'dhoni', 'shewag', 'virat', 'zaheer', 'laxman' ]

// join - return value (string)
console.log(players.join(', ')) //  dhoni, shewag, virat, zaheer, laxman

// slice method
console.log(players.slice(0,2)) // [ 'dhoni', 'shewag' ]
console.log(players.slice(1))   // [ 'shewag', 'virat', 'zaheer', 'laxman' ]

console.log(players.indexOf('dhoni'))   // 0
console.log(players.indexOf('adam'))   // -1

const n1 = [10, 20]
const n2 = [30, 40]
//  adding arrays
console.log(n1.concat(n2))  // [10, 20, 30,, 40]

// using reverse method on array the original state of array will be changed

console.log(fruits)     // ['apple', 'watermelon', 'mango']
console.log(fruits.reverse())   // [ 'mango', 'watermelon', 'apple' ]
console.log(fruits) // [ 'mango', 'watermelon', 'apple' ]

// console.log(players)
// console.log(players.fill('raina',0))
 console.log(players)













