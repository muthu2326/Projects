// ES5 feature - before - 2015

function add(n1, n2){
    // ternary operator = (condition)? trueStatment : falseStatment

    n1 = typeof n1 == 'undefined' ? 0 : n1
    n1 = typeof n2 == 'undefined' ? 0 : n2
    return n1 + n2
}

console.log(add())
console.log(add(10,20)) // 30
console.log(add(50))    // 50

// if you want to skip the parameter value
console.log(add(undefined,40))

// ES6 feature
function add(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(add())
console.log(add(10,20)) // 30
console.log(add(50))    // 50
console.log(add(undefined,40))

console.log(add(NaN,40))  // check

