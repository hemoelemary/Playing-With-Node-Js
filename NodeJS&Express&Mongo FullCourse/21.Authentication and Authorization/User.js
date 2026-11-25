const mongoose = require('mongoose');

const connect = async()=>{
    await mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/');
}


const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const model = mongoose.model('User',schema);

module.exports = {model,connect}