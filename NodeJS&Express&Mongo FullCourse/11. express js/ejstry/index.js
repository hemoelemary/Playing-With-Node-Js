const express = require('express');
const path = require('path')

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'))

const products = [
    {
    id:1,
    title:'hamoda'
    },
    {
        id:2,
        title:'hemo'
    }
]

app.get('/',(req,res)=>{
    res.render('home',{prods:products})
})

app.listen(3000)