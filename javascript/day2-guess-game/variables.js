var state;
console.log(typeof(state))  //'undefined'

var city = 'Bangalore'
console.log(typeof city)    // 'string'

var minTemp = 12
console.log(typeof minTemp) // 'number'

var maxTemp = 34.24             ///'number'
console.log(typeof maxTemp)

var placesToVisit = ['Cubbon Park', 'MG road']
console.log(typeof placesToVisit)       // 'object'

var geoCode = {
    lat: 32.2323,
    lng: 65.2323
}                                       // 'object'
console.log(typeof geoCode)

console.log(Array.isArray(placesToVisit))       // 'true'
console.log(Array.isArray(geoCode))             // 'false'

var isCapital = true                            // 'boolean'
console.log(typeof isCapital)

var details = function(){
    return 'IT capital of India'
}
console.log(typeof details)
console.log(details())  
