// elements is present or not

const numbers = [10, 15, 20, 25, 30]

console.log(numbers.indexOf(20))    // 1
console.log(numbers.includes(20))   // true

// c style of programming 
let number
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 25){
        number = numbers[i]
        break
    }
}
console.log(number)

// JS style of pragrammming

const result = numbers.find(function(ele){
    return ele >= 25    // breaks when the condition is met
})                      // return type - 'undefined' - single object of element that satisfy the condition

console.log(result)