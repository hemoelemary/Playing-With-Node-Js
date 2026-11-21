const express = require('express');

app = express();

const middle = (req,res,next)=>{
    console.log('hi i am running on every request');
    next()
}

app.use(middle)

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(3000);