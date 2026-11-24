const express = require('express');

const app = express();

const db = require('mongoose');

const start = async()=>{
    const connection = async()=>{ await db.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/');}
    await connection();
    console.log('connected')
    const schema = new db.Schema({
        name:String,
        price:Number,
        category:String,
        inStock:Boolean
    });
    const model = db.model('product',schema);
    await model.create({
        name:'hamoda',
        price:1,
        category:'Laptop',
        inStock:true
    })
    await model.create({
        name:'Laptop',
        price:300,
        category:'Laptop',
        inStock:true
    })
    await model.create({
        name:'hamoda3',
        price:500,
        category:'Laptop',
        inStock:true
    })
    console.log(await model.find())
    const prod1 = await model.findOne({name:'Laptop'});
    model.findByIdAndUpdate(prod1._id,{category:'hamoda'},{new:true});
    console.log(await model.find({name:'Laptop',category:'hamoda'}));
    model.findByIdAndDelete(prod1._id)    
    console.log(await model.find())
    app.listen(3000);
}

start()