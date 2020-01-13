const numbers = [10, 15, 20, 25, 30]

//c style of programming 
let evens = []
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ==0){
        evens.push(numbers[i])
    }
}
console.log(evens)

// JS style of programming

const result = numbers.filter(function(ele){    // iterates through every element of array
    return ele % 2 == 0         // return type - 'object' - array
})

console.log(typeof(result))
console.log(result)

