// es6 - class
//contains properties and methods

class Player {
    constructor(data){
        this.name = data.name,
        this.country = data.country
        }
        // instance method
        details(){
            return `${this.name} represents ${this.country}`
        }
        //static methods
        static sportName(){
            return 'cricket'
        }   
}

const p1 = new Player({ name: 'sachin', country:'india'})
const p2 = new Player({ name: 'dhoni', country:'india'})
const p3 = new Player({})


console.log(p1.name)  // 'sachin'
console.log(p2.name)    // 'dhoni'
console.log(p3.name)    // undefined
console.log(p1.details())
console.log(Player.sportName())
