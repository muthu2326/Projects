class HashTagGenerator {
    constructor(){
        this.generateTag = function(str){
            str = str.split(' ')
            let result = ''
            str.forEach(function(str){
                result = result + str[0].toUpperCase() + str.slice(1).toLowerCase()
            })
            return `#${result}`
        }
    } 
}

const h1 = new HashTagGenerator()
console.log(h1.generateTag('make in india'))