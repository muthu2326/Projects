// variables declared outside the function, automatically become global scope
// global variables  are those that can be accessed directly within function

// const n1 = 10
const n2 = 20

function add(n1){
    return n1 + n2
}

console.log(add(10)) // 30