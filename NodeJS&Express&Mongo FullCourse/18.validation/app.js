const mongoose = require('mongoose');

const start=async ()=>{
    const connect = await mongoose.connect('mongodb+srv://darelemary_db_user:KbVcMltAGvkA1Fg5@cluster0.fykw37r.mongodb.net/');
    const schema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            minlength:3,
            maxlength:30
        }, // required 
        pric:{
            type:Number,
            required:true,
            min:1
        }, // min minimum allowed value
        inStock:{
            type:Boolean,
            default:true
        }, // default value is true
        category:{
            type:String,
            enum:['Laptop','Phone',"Tablet"]
        }
    })

    const schema2 = new mongoose.Schema({
        username:{
            type:String,
            minlength:3,
            maxlength:20
        },
        email:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            min:18,
            max:60
        },
        role:{
            type:String,
            enum:['user','admin']
        },
        isActive:{
            type:Boolean,
            default:true
        }
    })

    //validate and validator

    const schema3 = new mongoose.Schema({
        username:{
            type:String,
            required:true,
            validate:{
                validator:function(value){
                    return /^\S+$/.test(value)
                },
                message:'user name can\'t contain spaces' 
            }
        }
    })

    const schema4 = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            validate:{
                validator:function(data){
                    return data.includes(' ')
                },
                message:'data cant include spaces'

            }
        }
    })
    const schema5=new mongoose.Schema({
        email:{
            type:String,
            validate:{
                validator:function(data){
                    const indexofat = data.indexOf('@');
                    const indexofdot = data.lastIndexOf('.');
                    return data.includes('@') && indexofdot>indexofat && indexofdot<data.length-1;
                },
                message:'it must contain @ and dot after @'
            }
        }
    })

    //update needs {runValidators:true}

}








