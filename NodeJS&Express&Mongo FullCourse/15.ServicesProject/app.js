const express = require('express');
const {Service,connection} = require('./config/db')
const app = express();

app.set('view engine','ejs');


app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/',async (req,res)=>{
    const products =await Service.find() || [];
    res.render('index',{prods:products});
})

app.post('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    await Service.findByIdAndDelete(id);
    res.redirect('/')
})

app.post('/',async (req,res)=>{

    try{
    const name = await req.body.name;
    const price = await req.body.price;

    if(name && price){
        await Service.create({
            name:name,
            price:price
        })
    }else{
        return res.send('invalid data')
    }
        res.redirect('/')
    }catch(err){
        if (err.name=='ValidationError'){
            return res.status(400).send('Invalid');
        }
        console.log(err)
        return res.status(500).send('server error')
    }
})

const run = async ()=>{
    await connection();
    console.log('connected')
    app.listen(3000);
}

run();