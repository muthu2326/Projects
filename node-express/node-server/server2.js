const http = require('http')
const port = 3001

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        
        response.setHeader('Content-Type', 'text/html')
        response.end('Request accepted')

    }else if(request.url == '/models'){
        console.log('hai')
        response.setHeader('Content-Type', 'application/json')
        const cars = [
            {model: 'maruthi',make: 'TATA'},
            {model: 'hundai', make: 'Suziki'}
        ]
        response.end(JSON.stringify(cars))

    } else if(request.url == '/owners'){
        response.setHeader('Content-Type', 'application/json')
        const owners = [
            {id: 1, name: 'nithin'},
            {id: 2, name: 'manoj'}
        ]
        response.end(JSON.stringify(owners))
        
    }else if(request.url == '/quotes'){
        response.setHeader('Content-Type', 'application/json')
            const fs = require('fs');
            fs.readFile('/home/mukund/mern-jan-2019/node-express/data.json',function (err, data) {
            if (err){
                console.log(err)
                throw err;
            } 
            let d = JSON.parse(data) 
            response.end(JSON.stringify(d))
        })        
    }else{
        response.end('page does\'nt exist')
    }
})

server.listen(port,function(){
    console.log('Server started')
})
