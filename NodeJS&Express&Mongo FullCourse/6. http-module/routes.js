const http = require('http');
const server = http.createServer((req,res)=>{

    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Home Page')
    }else if(url==='/meow'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Meow');
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('not found')
    }

})

const port = 3000;
server.listen(port,()=>{
console.log('listening on port 3000')
})