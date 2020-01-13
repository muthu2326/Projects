class Person {
    constructor(data){
        this.name = data.name,
        this.city = data.city
        this.greet = function(){
            return `Hello, my name is ${this.name} and I'm from ${this.city}`
        }
    }
}

const p1 = new Person({ name: 'Rahul', city: 'Mangalore'})
console.log(p1.greet())

