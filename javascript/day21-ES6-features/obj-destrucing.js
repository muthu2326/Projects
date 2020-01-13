const person = {
    firstName: 'rahul',
    lastName: 'dravid',
    country: 'India'
}

const student = {
    firstName: 'rajesh',
    city: 'mysore'
}

/// es5

// const firstName = person.firstName
// const lastName = person.lastName
// const country = person.country

// const studentName = student.firstName
// console.log(firstName,lastName)

//es6
// object destrucutring 

const { lastName,firstName,country } = person
console.log(firstName,lastName,country)

// providing alias to the property names

const {firstName: studentName} = student
console.log(studentName)

// set default value if no value is present
const { school = 'DCT'} = student
console.log(school)
console.log(student)

// set default value and give a alias name
const {city: cityName = 'bangalore'} = student
console.log(student)
console.log(cityName)