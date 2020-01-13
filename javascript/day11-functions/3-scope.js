let n1 = 10
let n2 = 20
let n3 = 30
function add(n1,n2){

    // here n1 and n2 are parameters and become local variables
    // when the parameter names and variables are declared outside share the same name,then there is shadowing of variables - global and local variables are of same names
    n1 = 100
    n2 = 200
    n3 = 300
    return n1 + n2 + n3
}

console.log(add(n1,n2)) // 600
console.log(n1,n2)  // 10, 20, 300