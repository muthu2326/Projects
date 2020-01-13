const jwt = require('jsonwebtoken')

const tokenData = {
    id: 1,
    username: "user1"
}

const token = jwt.sign(tokenData,'token@321')
console.log(token)