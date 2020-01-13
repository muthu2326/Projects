function Vehicle(model,make,fuelType,convert,ismoving){
    this.model = model
    this.make = make
    this.fuelType = fuelType
    this.isConvertable = convert
    this.move = false

    this.details = function(){
        return `model - ${this.model}, make - ${this.make}, fuelType - ${this.fuelType}`
    }
    this.start = function(){
        this.move = true
        return 'Vehicle has been started'
    }
    this.moving = function(){
        if(this.move){
            return 'vroom'
        }else{
            return 'start vehicle first'
        }
    }
    this.stop = function(){
        this.move = false
        return 'the vehicle has stopped'
    }
}

const v1 = new Vehicle('nano','tata','petrol',true,false)

console.log(v1.details())
console.log(v1.start())
console.log(v1.moving())
console.log(v1.stop())

// const v2 = new Vehicle('nano','tata','petrol',true,true)
// console.log(v2.moving())
