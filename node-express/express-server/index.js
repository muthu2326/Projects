const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const app = express()
const port = 3000

// enable cors in node express
app.use(cors())

// configuring express to accept incoming json data
app.use(express.json())
const users = [
    {id:1, name: 'kissan'},
    {id:2, name: 'rajesh'}
]

const movies = [
    {id: uuid(), name: 'Avengers', rating: 4, category: 'fantacy', description: 'super-hero movie'},
    {id: uuid(), name: 'Battleship', rating: 3.5, category: 'thriller', description: 'aliens movie'}
]
//localhost:3000
// route handlers - by default error message will be shown on the browser

// app.httpMethod(PATH, fUNCTION) - if get method and path is correct then the callback function will be invoked

            app.get('/',function(request,response){
                response.send('My movies')
            })

            app.get('/about', function(req,res){
                res.send('<h2>About US</h2>')
            })

            app.get('/users', function(req,res){
                res.send(users)
            })

            app.get('/movies', function(req, res){
                res.send(movies)
            })

            // finding a movie with id
            app.get('/movies/:id', function(req, res){      // '/movies/:name'  
                const movie = movies.find(function(movie){
                    return movie.id == req.params.id
                })
                if(movie){
                    res.send(movie)
                }else{
                    res.send(`requested movie with id ${req.params.id} not found`)
                }
            })

            // adding a movie
            app.post('/movies/create/:movie', function(req, res){
                console.log(req.body)
                movie.id = uuid()
                movies.push(movie)
                res.send({
                    movie,          // ES6 consise property
                    notice: 'Successfully added a movie'
                })
            })
            // update a movie
            app.put('/movies/update/:id', function(req, res){
                const body = req.body
                const movie = movies.find(function(movie){
                    return movie.id == req.params.id
                })
                if(movie){
                     delete body.id  // even Object.freeze can be used - but it cannot be updated
                    Object.assign(movie, body)
                    res.send({
                        movie,          // ES6 consise property
                        notice: 'Successfully updated the movie'
                    })
                }else{
                    res.send(`requested movie with id ${req.params.id} not found`)
                }  
            })

            //delete a movie
            app.delete('/movies/delete/:id', function(req, res){
                const index = movies.findIndex(function(movie){
                    return movie.id == req.params.id
                })

                if(index >= 0){
                    movies.splice(index,1)
                    res.send({
                        notice: 'Successfully removed the movie'
                    })
                }else{
                    res.send({
                        notice: 'movie with id not found'
                    })
                }
            })

            app.listen(port,function(){
                console.log('Listening port', port)
            })