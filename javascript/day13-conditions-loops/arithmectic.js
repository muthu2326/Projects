// note - if your not using return inside the case statment, then you will have to manually have to break from the switch statement
function arithmetic(a,b,operator){

    let output
    switch(operator){
        case 'add':
        // return a + b // break not required
        output = a + b
        break
        case 'subtract':
        //return a - b  // break not required
        output = a - b
        break
        case 'multiply':
        // return a * b // break not required
        output = a * b
        break
        case 'divide':
       // return a / b  // break not required
        output = a / b
        break
        default : 
            //return 'invalid operator'
            output = 'invalid operator'
    }
    return output
}

console.log(arithmetic(5, 2, 'add'))
console.log(arithmetic(5, 2, 'subtract'))
console.log(arithmetic(5, 2, 'multiply'))
console.log(arithmetic(5, 2, 'divide'))
console.log(arithmetic(5, 2, 'modlus'))

