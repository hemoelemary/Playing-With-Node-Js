const mongoose = require('mongoose');

const connection = async()=>{
    await mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/');
}
const schema= new mongoose.Schema({
        name:{
            type:String
        },
        price:{
            type:Number
        }
    })
const Service = mongoose.model('service',schema);



module.exports = {Service,connection}