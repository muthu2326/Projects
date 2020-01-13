const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bookmarlurl',{useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('something went wrong')
    })

    module.exports = {
        mongoose
    }
