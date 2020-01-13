//ES6 - object constructor function
// contains properties and methods

function Player(data){
    this.name = data.name,
    this.country = data.country

    // instance method
    this.details = function(){
        return this.name + ' represents ' + this.country
    }
}

//static methods
Player.sportName = function(){
    return 'cricket'
}

const p1 = new Player({ name: 'sachin', country:'india'})
const p2 = new Player({ name: 'dhoni', country:'india'})
const p3 = new Player({})

console.log(p1.name)  // 'sachin'
console.log(p2.name)    // 'dhoni'
console.log(p3.name)    // undefined
console.log(p1.details())
console.log(Player.sportName())