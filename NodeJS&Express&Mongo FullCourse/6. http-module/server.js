// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req,'req')
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end('Hello From Node Js')
// })

// const port = 3000;
// server.listen(port,()=>{
//     console.log(`server is now listening to port ${port}`)
// });

const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req)
res.writeHead(200,{'content-type':'text/plain'})
res.end('node js')
})

server.listen(3000,()=>{
    console.log('server runs')
})