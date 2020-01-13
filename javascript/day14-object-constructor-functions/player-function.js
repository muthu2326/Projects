
// Object Constructor Function

// We can create our own object type
// These are blue print , N number of instances can be created
// Similar to Classes in OOPS programming 

function Player(name, country,runs){
    this.name = name
    this.country = country
    this.runs = runs
    // method will be invoked by an object
    // instance methods - will always be called on an obj
    this.calculateAvg = function(){
        let total = 0
        this.runs.forEach(score => {
            total += score
        });
        return total / this.runs.length
    }

    // instance methods
    this.totalmatches = function(){
        return this.runs.length
    }
    console.log(this)
}

// static method - which will be called on a type / Function
// can be called without an object

Player.instance = function(obj){
    return obj instanceof Player
}

function Score(runs){
    this.runs = runs
}

const p1 = new Player('virat', 'India', [40, 30, 50, 70])
console.log(p1.name , p1.country, p1.calculateAvg())
console.log(Player.instance(p1))

const p2 = new Score([10,40,60])

console.log(Player.instance(p2))

// console.log(Object.keys(p1))

// const p2 = new Player('sachin',undefined,[70, 30, 50])
// console.log(p2.name, p2.country, p2.totalmatches())
// console.log(Object.keys(p2))

//console.log(Player)

