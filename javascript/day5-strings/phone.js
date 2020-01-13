const phone = '1234567890'

console.log(`(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`)

const first = phone.slice(0,3)
const second = phone.slice(3,6)
const third = phone.slice(6)

console.log('(' + first + ') ' + second + '-' + third)


console.log(`(${phone.substr(0,3)}) ${phone.substr(3,3)}-${phone.substr(6,4)}`)

console.log(`(${phone.substr(0,3)}) ${phone.substr(3,3)}-${phone.substr(6)}`)

console.log(phone.substr(0,1))