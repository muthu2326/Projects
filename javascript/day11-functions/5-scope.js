const n1 = 10
const n2 = 20

function add(n1,n2){

    // whenever a variable is created without let / var / const inside the function, it becomes global variable
    result = n1 + n2
    return result
}

console.log(add(n1,n2)) // 30
console.log(result) 
console.log(typeof(result))

result = 50
console.log(result) 
