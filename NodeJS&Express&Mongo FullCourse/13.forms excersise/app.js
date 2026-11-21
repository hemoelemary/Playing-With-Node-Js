const express = require('express');
const app = express();

app.set('view engine','ejs');

// middleware to convert data from x-www-form-urlencoded to json
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('form')
});

// req.query in GET product?id=5 if it product/15 be req.params.id , req.body in POST

app.post('/send',(req,res)=>{
    const data = req.body;
    console.log(data)
    res.send('done')
});

app.listen(3000)