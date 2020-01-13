const http = require('http')
const port = 3000

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.end('Hello world')
    } else if(request.url == '/about'){
        response.end('About us page')
    } else if(request.url == '/contact'){
        response.end('Contact page')
    } else if(request.url == '/products'){
        response.setHeader('Content-Type', 'text/html')
        response.end('<ul><li>Marker</li><li>Scale</li></ul')
     } else if(response.url == '/users'){
        response.setHeader('Content-Type', 'application/json') 
        const users = [
             {id:1, name: 'jaya'},
             {id:2, name: 'rajesh'}
         ]
         response.end(JSON.stringify(users))
        }
        else{
            response.end('page your looking for does not exist')
        }
    })
    
    //   } else if(request.url == '/movies'){
    //     response.setHeader('Content-Type', 'application/json') 
    //     const movies = [
    //         {id:1, name: 'Avengers'},
    //         {id:2, name: 'KGF'}
    //     ]
    //     response.end(JSON.stringify(movies))
    
server.listen(port, function(){
    console.log('Listening on page', port)
})