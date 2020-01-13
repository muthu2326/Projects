const express = require('express')
const port = 3000
const app = express()
const fs = require('fs');
const morgan = require('morgan')
var useragent = require('express-useragent');
app.use(express.json())
app.use(useragent.express());

// inporting the database and routers
const { mongoose } = require('./config/database')
const { bookmarkRouter } = require('./app/controllers/bookmarkController')
const { hashRouter} = require('./app/controllers/hashController')


// logging the requests
const accessLogStream = fs.createWriteStream('./logs' + '/access.log',{flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}))

// routers
app.use('/bookmarks', bookmarkRouter)

app.use('/', hashRouter)

// error handling middleware
app.use('*',function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send({
        notice: 'The resource you are looking for doesn’t exist.'
    });
});

// listening to port
app.listen(port,function(){
    console.log('listening port', port)
})