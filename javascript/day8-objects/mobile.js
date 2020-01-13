// Objects - 1. Single object 2. Array os objects

// data represented as an array

const player = ['jadeja', 'india', 'csk', 'sorastra', 38, 18.7, 8000,230]

console.log(player[6])

// data represented as object
const cricketer = {
    name: 'jadeja',
    country: 'india',
    ipl: 'csk',
    ranji: 'sourastra',
    battingAvg: 38,
    bowlingAvg : 18.7,
    totalRuns: 8000,
    totalWickets: 230
}

console.log(cricketer.totalRuns)

// mutliple objects will be put inside an array
const products = [
    {id: 1, name: 'marker', price: 10},
    {id: 2, name: 'scale', price: 5},
    {id: 3, name: 'board', price: 150}
]

let result = products.find(function(product){
    return product.price <=150
})
console.log(result)


let result2 = products.filter(function(product){
    return product.price < 150
})
console.log(result2)



