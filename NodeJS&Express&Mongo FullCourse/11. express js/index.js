// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

// const port = 3000;
// app.listen(port,()=>{
//     console.log(port)
// })


const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log(3000)
})