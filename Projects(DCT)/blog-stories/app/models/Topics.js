const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicsSchema = new Schema({
        name: {
            type: String,
            unique: true
        }
})

const Topics = mongoose.model('Topics', topicsSchema)

module.exports = {
    Topics
}