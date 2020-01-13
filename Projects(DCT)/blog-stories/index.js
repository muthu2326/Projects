const express = require('express')
const {mongoose} = require('./config/database')

const app = express()
const port = 3005
app.use(express.json())


const { topicRouter } = require('./app/controllers/TopicController')

app.use('/topics', topicRouter)

app.listen(port,() => {
    console.log(`listening port ${port}`)
})