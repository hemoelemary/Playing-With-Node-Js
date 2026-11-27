const express = require('express');

const app = express();

const bcrypt = require('bcryptjs');

require('dotenv').config()
const jwt = require('jsonwebtoken')

app.use(express.json());

const {model,connect} = require('./user');

app.post('/api/auth/register',async (req,res)=>{
    const {name,email,password}=req.body;
    try{
    const user = await model.create({
        name:name,
        email:email,
        password:await bcrypt.hash(password,10)
    })
    res.status(201).json({
        message:{
            name:name,
            email:email
        }
    })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'something went error'
        })
    }
})

app.post('/api/auth/login',(req,res)=>{
    const {email,password} = req.body;
    const user = model.findOne({email:email});
    const iscorrect = bcrypt.compare(password,user.password);
    if(iscorrect){
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    }

})

const run = async()=>{
    await connect();
    app.listen(3000)
}

run()