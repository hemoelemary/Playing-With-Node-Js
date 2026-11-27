const express = require('express');
const app = express();
const b = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {model,connect}=require('./user')

app.use(express.json());

app.post('/api/auth/login',async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await model.findOne({email:email});
        if(user){
            const isMatch = await b.compare(password,user.password)            
            if(isMatch){
                const token = jwt.sign({userId:user._id},'secret',{expiresIn:'1h'})
             return res.status(200).json({message:'login-successful',token:token});
            }else{
                return res.status(401).json({message:'invalid email or password'})
            }
        }else{
            return res.status(401).json({message:'Invalid email or password'});
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'internal server error'});
    }
})

const run = async()=>{
    await connect(); 
    app.listen(3000);
}
run();