const express = require('express')
const router = express.Router()
const shorthash = require('shorthash')
const validator = require('validator')

// importing models
const { Bookmark } = require('../models/Bookmark')

// localhost:3000/booksmarks - get request for all records
router.get('/',function(req,res){
    Bookmark.find()
        .then(function(bookmarks){
            res.send(bookmarks)
        })
        .catch(function(err){
            res.send(err)
        })
})


//localhost:3000/bookmarks/tags?name=mongo,javascript - find bookmarks by given tag names array
router.get('/tags?',function(req,res){
    const tags = req.query.name.split(',')
    Bookmark.find({tags:{'$in':tags}})
        .then(function(bookmarks){
            res.send(bookmarks)
        })
        .catch(function(err){
            res.send(err)
        })
})


//localhost:3000/bookmarks/:id - finding by ID - get request
router.get('/:id',function(req,res){
    Bookmark.findById(req.params.id)
        .then(function(bookmark){
            res.send(bookmark)
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3000/bookmarks
router.post('/',function(req,res){
    const body = req.body
    const bookmark = new Bookmark(body)
    bookmark.save()
        .then(function(bookmark){
            res.send(bookmark)
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3000/bookmarks/:id - updating by ID - put request
router.put('/:id',function(req,res){
    Bookmark.findByIdAndUpdate(req.params.id,{ $set: req.body}, {new: true, runValidoators: true})
    .then(function(bookmark){
        if(req.body.originalUrl && validator.isURL(req.body.originalUrl)){ 
            bookmark.hashedUrl = shorthash.unique(req.body.originalUrl)
        }    
            res.send(bookmark)
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3000/bookmarks/:id - delete by ID - delete request
router.delete('/:id', function(req,res){
    Bookmark.findByIdAndDelete(req.params.id)
        .then(function(bookmark){
            res.send(bookmark)
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3000/bookmarks/tagname - find bookmarsk by given tag names
router.get('/tags/:tagname',function(req,res){
    Bookmark.find({tags: req.params.tagname})
        .then(function(bookmarks){
            if(bookmarks.length > 0){
                res.send(bookmarks)
            }else{
                res.send('No bookmarks found for the specified tags')
            }
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    bookmarkRouter: router
}