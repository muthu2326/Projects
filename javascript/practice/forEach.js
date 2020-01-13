// const person = {
//     name: 'Rahul',
//     age: 12
// }   

// for(let values in person){
//     console.log(values, person[values])
// }

// console.log(Object.values(person))
// console.log(Object.keys(person))


// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        return `The ${this.position} position is ${this.type} and ${accepting}.`
    }
};

const developer = Object.create(job)
console.log(developer.showDetails())
console.log(Object.entries(job))
