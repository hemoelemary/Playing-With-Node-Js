const express = require('express');
const path = require('path');
const app = express();

//set the view engine

app.set('view engine','ejs');

// set the directory for the views

app.set('views',path.join(__dirname,'views'));

const prods = [
    {
        id:1,
        title:'product 1'
    }
    ,
    {
        id:2,
        title:'product 2'
    }
]

app.get('/',(req,res)=>{
    res.render('home',{title:'home',products:prods})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'about'})

})
const port =3000;
app.listen(port,()=>{
    console.log('server running')
})