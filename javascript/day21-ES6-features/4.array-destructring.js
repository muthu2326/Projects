const numbers = [10, 20, 30, 40]

//es5

// const n1 = numbers[0]
// const n2 = numbers[1]
// const n3 = numbers[2]
// const n4 = numbers[3]

// console.log(n1, n2, n3, n4)

// es6 - array destructring

const  [n1,n2,n3,n4] = numbers
console.log(n1, n2, n3, n4)

const [a1,a2] = numbers
console.log(a1, a2)

const [b1,,b2] = numbers
console.log(b1, b2)

const [c1,,,c2] = numbers
console.log(c1, c2)
