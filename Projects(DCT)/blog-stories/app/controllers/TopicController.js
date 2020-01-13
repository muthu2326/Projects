const express = require('express')
const router = express.Router()

// importing the models
const { Topics } = require('../models/Topics')

router.get('/', (req, res) => {
    Topics.find()
        .then((topics) => res.send(topics))
        .catch((err) => res.send(err))
})

router.post('/new', (req,res) => {
    const body = req.body
    const topic = new Topics(body)
        topic.save()
        .then((topic) => res.send(topic))
        .catch((err) => res.send(err))
})

module.exports = {
    topicRouter: router
}