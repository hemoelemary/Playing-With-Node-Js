const mongoose = require('mongoose');
const conn = async()=>{await mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/')};
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,

        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

const model = mongoose.model('auth',schema);

module.exports = {conn,model}