// special arguments object, this will hold all the arguments passed to the function in an object form

function add(n1,n2){
    console.log(arguments[0])     // arguments - keyword - type (Object)
    console.log(arguments[1])
    console.log(arguments[2])
    
    return {
        add: n1 + n2,
        sum: arguments[0] + arguments[1]
    }
}

console.log(add(10,20,30))