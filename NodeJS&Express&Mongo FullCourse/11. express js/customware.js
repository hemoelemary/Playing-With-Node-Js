const express=  require('express');
const app = express();

const reqtimestlog = (req,res,next)=>{
    const timeStamp = new Date().toISOString();
    console.log(timeStamp,'from',req.method,'to',req.url)
    next()
}

app.use(reqtimestlog)

app.get('/',(req,res)=>{
res.send('home');
})

app.listen(3000)