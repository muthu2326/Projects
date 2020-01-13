const express = require('express')
const router = express.Router()
const { Bookmark } = require('../models/Bookmark')


// localhost:3000/bookmarks/:hash
router.get('/:hashedUrl',function(req, res){
    Bookmark.findOne({hashedUrl: req.params.hashedUrl})
        .then(function(bookmark){
            if(!bookmark){
                if (req.accepts('html')) {
                    res.status(404).send(`<h2>Error: Requested page does'nt exist</h2>`)
                }
            }
            let deviceType = ''
            if(req.useragent.isDesktop){
                deviceType = 'Desktop'
            }else if(req.useragent.isMobile){
                deviceType = 'Mobile'
            }

            const clickedObj = {
                ipAddress: req.ip,
                browserName: req.useragent.browser,
                osType: req.useragent.os,
                deviceType: deviceType
            }
            console.log(clickedObj)
            bookmark.clicks.push(clickedObj)
            bookmark.save()
                .then(function(bookmark){
                    res.send(bookmark)
                })
            res.redirect(bookmark.originalUrl)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    hashRouter: router
}