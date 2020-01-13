// function expression
function add(){

}

//function expression - when ever a function is assinged as a value to a variable 

const sum = function(n1,n2){ // anonymous function - meaning a function without name
    return n1 + n2
}

console.log(sum(10,20))
console.log(sum(20,20))

console.log(sum)

const n1 = 10
const n2  = 20
console.log(sum(n1,n2))


function addition(func){
    const result = func(10,30)
    console.log(result)
}

addition(sum)
