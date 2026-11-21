const express = require('express');
const app = express();

//define middleware function

const myMiddleware = (req,res,next)=>{
    console.log(`middle ware will run on every request`);
    // may make some validation
    next(); //calling the next function after the middleware
}

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('ABout Page')
})
app.listen(3000);