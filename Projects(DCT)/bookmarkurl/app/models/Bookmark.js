const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const shorthash = require('shorthash')

const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true,
        validate:{
            validator: function(value){
                return validator.isURL(value)
            },
            message: function(){
                return 'Invalid URL format'
            }
        },
    },
    tags: {
        type: [String],
        required: true
    },
    hashedUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    clicks:[{
        clickedAt:{
            type: Date,
            default: Date.now
        },
        ipAddress:{
            type: String
        },
        browserName:{
            type: String
        },
        osType:{
            type: String
        },
        deviceType:{
            type: String
        }
    }]
})

    bookmarkSchema.pre('save', function(next){
        const bookmark = this
        console.log('pre-save')
        if(bookmark.isNew){
            bookmark.hashedUrl = shorthash.unique(bookmark.originalUrl)
            next()
        }else{
            next()
        }
    })

const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports ={
    Bookmark
}



