const mongoose = require('mongoose')
const Schema = mongoose.Schema

import { responseSchema } from '../models/Response'

const storyScehma = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean
    },
    publishDate: {
        type: Date
    },
    previewImageUrl: {
        type: String
    },
    topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topics'
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tags'
        }
    ],
    responses: [ responseSchema ],
    claps: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            count: {
                type: Number,
                max: 5
            }
        }
    ],
})

const Story = mongoose.model('Story', storyScehma)

module.exports = {
    Story
}