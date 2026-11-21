const express = require('express');
const app = express();

//app level settings

app.set('view engine','ejs');

//routing

app.get('/',(req,res)=>{
    res.send('home')
})

app.post('/api/data',(req,res)=>{
    res.json(
        {message:'data',data:req.body}
    )
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something went wrong') //internal sever error
})