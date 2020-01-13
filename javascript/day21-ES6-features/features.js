// while doing react.JS we need to convert ES6 to ES5 by using Babel compiler

// object 
const name = 'ramesh'
const city = 'Bangalore'

const person = {
    name: name,
    city: city
}

console.log(person)

//ES6
// if the property name is same as the variable name, we can ommit using the property name and use only the varaible name

// concise property

const student = {
    name,
    city
}
console.log(student)


// es5
const employee = {
    firstName: 'ramesh',
    details: function(){
        return `${this.firstName} is an employee`
    }
}

// es6 

// concise methods
const emp = {
    firstName: 'suresh',
    details(){
        return `${this.firstName} is an employee`
        },
        greet(name){
            return `Hi ${name}, iam fine ${this.firstName}`
        }
}

console.log(emp.details())
console.log(emp.greet('jaya'))
