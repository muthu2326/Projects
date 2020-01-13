// anatomy
// fuction declartion / function definiftion
function greet(){
    console.log('hello')
}

// function invoke / call of a function
greet // referring to the function
greet() // invoking functions


// fuction declartion / function definiftion
// function name = sayHello
// parameter = name
function sayHello(name){
    console.log('Hello ' + name)    // parameter - name || local variables
}

// invoking the function

sayHello('Ani') // 'Ani - argument
sayHello('mani')

const name = 'Suraj'
sayHello(name) // name is an argument

// find a number in an array
function findNum(array,n){
    if(array.indexOf(n) >= 0){
        console.log('number is present')
    }else{
        console.log('number is not present')
    }
}

findNum([10, 20, 30, 40],30)
findNum([10, 20, 30, 40],55)
