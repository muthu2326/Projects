const validator = require('validator')

const url = 'https://mongoosejs.com/docs/schematypes.html#arrays'

console.log(validator.isURL(url))