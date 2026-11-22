const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

const start = async ()=>{
    await mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/');
    
    const userSchema = new mongoose.Schema(
        {
            name:{
                type:String
            }
            ,
            email:{
                type:String
            }
        }
    )
    const model = mongoose.model('User',userSchema) //model used to CRUD in db create find findById deleteOne
    const user = await model.create(
        {
            name:'mohamed',
            email:'hamoda'
        }
    )
    console.log(user)


    // new Model({
    //     name:'ahmed',
    //     email:'ahmed@gmail.com'
    // }).save()

    

    app.listen(3000,()=>{
        console.log('server runs and connected to db')
    });
}

start();