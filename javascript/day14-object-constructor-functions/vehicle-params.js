function Vehicle(data){
    this.model = data.model
    this.make = data.make
    this.fuelType = data.fuelType
    this.isConvertable = data.convert
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
            return 'start the vehicle first'
        }
    }
    this.stop = function(){
        if(this.move){
            this.move = false
            return 'the vehicle has stopped'
        }else{
            return 'start the vehicle first'
        }
    }
}

const v1 = new Vehicle({ model: 'Nano',make: 'Tata', isConvertable: false,fuelType: 'Diesel'})
console.log(v1.moving())
console.log(v1.stop())
console.log(v1.start())
console.log(v1.stop())
