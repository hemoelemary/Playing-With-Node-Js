const express = require('express');
const app = express();
const {conn,model}=require('./models/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    const {name,email,password} = req.body;
    try{
        const user = await model.create({
            name:name,
            email:email,
            password:await bcrypt.hash(String(password),10)
        });
        console.log(user)
    }catch(err){
        if(err.code==11000){
            return res.status(409).send('email arleady exists');
        }
        console.log(err)
        return res.status(500).send('something went wrong')
    }
    return res.redirect('/login');
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await model.findOne({email:email});
        if(user){
            const isMatch = await bcrypt.compare(password,user.password);
            if(isMatch){
                const j = jwt.sign({id:user._id},'secret',{expiresIn:'1h'})
                res.cookie('token',j,{
                    httpOnly: true,
                    secure: false,
                    sameSite: 'lax',
                    maxAge: 60 * 60 * 1000
                })
                return res.redirect('/')
            }
        }else{
            return res.status(401).send('Wrong Password')
        }
    }catch(err){
        console.log(err)
    }
})

app.get('/login',(req,res)=>{
    res.render('login');
})

const auth = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.redirect('/login')
    }
    try{
        const decoded = jwt.verify(token,'secret');
        req.user = decoded;
        next();
    }catch(err){
        return res.redirect('/login')
    }
}

app.get('/',auth,(req,res)=>{
    
    res.render('home');
})



const run = async()=>{
    await conn();
    console.log('connected')
    app.listen(3000);
};

run()
