const http = require('http')
const port = 3000

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.end('Hello world')
    } else if(request.url == '/movies'){
            response.setHeader('Content-Type', 'application/json') 
            const movies = [
                {id:1, name: 'Avengers'},
                {id:2, name: 'KGF'}
            ]
            response.end(JSON.stringify(movies))
    } else if(response.url = '/users'){
        response.setHeader('Content-Type', 'application/json') 
        const users = [
             {id:1, name: 'jaya'},
             {id:2, name: 'rajesh'}
         ]
         response.end(JSON.stringify(users))
        }
     else {
        response.end('no page')
    }
})

server.listen(port, function(){
    console.log('Listening', port)
})