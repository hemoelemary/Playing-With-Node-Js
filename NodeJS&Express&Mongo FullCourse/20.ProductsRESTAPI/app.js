const express = require('express');
const app = express();

const {conn,model} = require('./db')

app.get('/api/products',async (req,res)=>{
    const products = await model.find();
    res.status(200).json(products)
})

app.get('/api/product/:id',async(req,res)=>{
    const id = req.params.id;
    const product = await model.findById(id);
    res.status(200).json(product);
})

app.post('/api/products',async(req,res)=>{
    const product = req.body;
    const newx = await model.create(product);
    res.status(201).json(newx)
})


const start = async()=>{
    await conn();
    app.listen(3000)  
}

start()