const numbers = [10, 20, 30]

// we can add,remove or replace  values into an array, even though declared as const
numbers.push(40, 50)
console.log(numbers)


// do not allow to make any changes use Object.freeze()
// arrays throws an error if freezed
//Object.freeze(numbers)
//numbers.push(60)


// we can add,remove or replace  values into an object, even though declared as const
const person = {
    name: 'rahul'
}
console.log(person)

// do not allow to make any changes use Object.freeze()
// Object.freeze(person)
// Object doesn't throw an error if freezed
//person.name = 'jagan'
console.log(Object.isFrozen(person))    //  use Object.isFrozen() to check if Object is freezed or not