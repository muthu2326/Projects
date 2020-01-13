const mongoose = require('mongoose')
const mongodb = require('mongodb');


// const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/blog-stories'

const CONNECTION_URI = 'mongodb://localhost:27017/blog-stories'

mongoose.Promise = global.Promise 

//estabilsihing connection to DB
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true})
    .then(function(){   
        console.log('connected to db')
    })
    .catch(function(err){
        console.log(err)
        console.log('OOPS!! Something went wrong in DB Connection')
    })

    module.exports = {
        mongoose
    }
