const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$rgh1bAsK39SoQSm3BjylJelrnQjJpaCsAx/UytFlmzJiLJ6RtSvny'
const password = 'secret564'

// bcryptjs.compare(password,encrypted)      // takes 2 args login password and the stored encrypted password
//     .then(function(result){                // returns boolean when resolved
//         console.log(result)
//     })
//     .catch(function(err){
//         console.log(err)
//     })


    // working of bcryptjs.compare method

    const salt  = encrypted.slice(0,29)
    console.log(salt)

    console.log(encrypted)
    bcryptjs.hash(password,salt)
        .then(function(hashPassword){
            console.log(hashPassword)
        })
