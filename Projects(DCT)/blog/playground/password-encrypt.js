const bcryptjs = require('bcryptjs')

const password = 'secret123'

bcryptjs.genSalt(12)
    .then(function(salt){
        console.log(salt)
        bcryptjs.hash(password,salt)
            .then(function(encryptedpassword){
                console.log(encryptedpassword)
            })
    })