function add(a,b){
    console.log(a + b)
}

const result = add(10,20)
console.log(result)

// console.log(add(10,20))

function addSub(a,b){
    const add = a + b
    const sub = a - b

    // return multiple values from the function
    // return [add, sub]
    return {
        addition: add,
        subraction: sub
    }
}

const result1 = addSub(10,20)

// console.log('addition', result1[0])
// console.log('subraction', result1[1])

console.log('addition', result1.addition)
console.log('subraction', result1.subraction)

console.log('results' , result1.addition , result1.subraction)