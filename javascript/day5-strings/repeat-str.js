var str = 'hi'

function repeatString(a,b){
let str = ''
    for(let i = 0; i < b; i++){
        str = str + a
    }
    return str
}
console.log(repeatString('hello',4))
console.log(repeatString('hi',5))

// using repeat method()
console.log('hello'.repeat(7))