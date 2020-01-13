 // var - var is function scoped
 // anywhere in the function you declare a varaiable with var, it is available across the function

 function greet(gender){
     if(gender == 'female'){
         var message = 'Hello Madam' // will be made avilable outside
     }else{
        var message = 'Hello Sir'   // will be made avilable outside
     }
     console.log(message)
 }

greet('female')


// let / const is block scoped
 function sayHello(gender){
    if(gender == 'female'){
        let message = 'Hello Madam' // will not be made avilable outside
        console.log(message)
    }else{
       let message = 'Hello Sir'   // will not be made avilable outside
       console.log(message)
    }
    //console.log(message) wan to use, but cannot
}

sayHello('male')

//updated version
// let / const made as local scoped
function Hello(gender){
    let message
    if(gender == 'female'){
         message = 'Hello Madam !' // will be made avilable outside since local scoped
    }else{
         message = 'Hello Sir !'   // will be made avilable outside since local scoped
    }
    console.log(message)
}

Hello('female')