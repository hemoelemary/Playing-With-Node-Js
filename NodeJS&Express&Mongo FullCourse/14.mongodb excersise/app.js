const express = require('express');
const mongoose = require('mongoose')
app = express();

const connection = mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/')

const schema = new mongoose.Schema(
    {

        name:{
            type:String
        },
        age:{
            type:Number
        }
    
    
    },
    
)

const model = mongoose.Model('user1',schema);

const create = model.create({
    name:'mohamed',
    age:10
})

const users = model.find(); // if no condition return all users

//find({name:'mohamed'}) return array even if result is one

//findOne return only the document that applies the condition
// findById


// findByIdAndUpdate(id,update,{new:true}) // {new:true} return new document
//findOneAndUpdate() // condition but not with id
// updateOne update first one with same condition

// findByIdAndDelete(id) // {new:true} return new document
//findOneAndDelete() // condition but not with id
// deleteeOne update first one with same condition
