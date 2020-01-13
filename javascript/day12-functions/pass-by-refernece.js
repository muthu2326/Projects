// all objects types are pass by reference

let prices = [10, 20, 30]

console.log(prices)

function changeValue(prices){
    prices.push(40)
    console.log(prices)
}

changeValue(prices)
console.log(prices)

const person = {
    name: 'ravi',
    city: 'Bangalore'
}

function changeCity(person){
    person.city = 'mysore'
}

console.log(person)
changeCity(person)
console.log(person)
