const numbers = [10, 15, 20, 25, 30]

//ES5 style of code

const n = numbers.filter(function(n){
    return n % 2 == 0
})

console.log(n)

const add = (n1, n2) => {   // multiple lines of code
    return n1 + n2
}
console.log(add(10,20))

console.log(numbers.filter(n => n & 2 == 0)) // single line of code

