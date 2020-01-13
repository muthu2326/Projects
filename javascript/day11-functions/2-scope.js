// global scope - below code for accessing variables inside the function and update the value

let n1 = 10
let n2 = 20

function add(){
    n1 = 100
    n2 = 200
    return n1 + n2
}

console.log(add())  // 300
console.log(n1,n2) // 100, 200
