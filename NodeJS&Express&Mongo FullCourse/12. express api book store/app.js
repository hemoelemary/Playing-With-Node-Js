const express = require('express');
const app = express();

// middleware
app.use(express.json())


const books = [
    {
        id:1,
        title:'book1'
    },
    {
        id:2,
        title:'book2'
    }
]

// get intro
app.get('/',(req,res)=>{
    res.json(
        {
            message:'welcome to our bookstore api'
        }
    )
})

// get all books
app.get('/get',(req,res)=>{
    res.json(books)
})



app.listen(3000);