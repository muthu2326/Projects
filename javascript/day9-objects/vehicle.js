// key: value or property: value
const car = {
    model: 'swift',
    make: 'maruthi',
    start: function(){  // whenever you assign a function as a value to a property, it is called a method
        return 'the car has started'
    },
    move: function(){
        return 'the car is moving'
    },
    stop: function(){
        return 'the car has been stopped'
    }
}

console.log(car.model)
console.log(car.make)
console.log(car.start())
console.log(car.move())
console.log(car.stop())
