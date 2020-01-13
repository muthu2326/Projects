const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blog-video',{useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('err connecting to db')
    })

    module.exports = {
        mongoose                                                                                                                                                                    
    }