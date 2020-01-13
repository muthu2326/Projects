function add(n1,n2){
    console.log(n1, n2)
    return n1 + n2
}

// error in other programming lang - wrong number of args passed, 0 for 2

// if we dont pass arguments, parameters will hold undefined - undefined + undefined = Nan
console.log(add())  // Nan

// error in other programming lang - wrong number of args passed, 3 for 2

// if extra arguments are passed, JS will ignore extra arguments
console.log(add(10,20,30)) // 30

// error in other programming lang - wrong number of args passed, 1 for 2
console.log(add(10,20))
// if less arguments are passed, the balance parameters will hold undefined - Number + undefined = Nan
console.log(add(10))        // Nan 

console.log(add(10,20))

