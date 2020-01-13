// all the primitive data types are pass by value

let n1 = 10

function changeValue(n1){
    n1 = n1 + 20
    console.log(n1) // 30
}

changeValue(10)
console.log(n1) // 10