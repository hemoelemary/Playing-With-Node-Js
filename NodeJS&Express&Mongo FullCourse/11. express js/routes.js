// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.get('/products',(req,res)=>{
// const products=[
//     {
//     id:1,
//     label:'product 1'
// }
// ]
// res.json(products)
// })


// app.get('/product/:id',(req,res)=>{
//     const productid = parseInt(req.params.id);
//     const products=[
//     {
//     id:1,
//     label:'product 1'
//     },
//     {
//         id:2,
//         label:'product 2'
//     }
// ]
//     const s = products.find((v)=>v.id===productid);
//     if(s){
//         res.json(s)
//     }else{
//         res.status(404).send('not found');
//     }
// })

// const port = 3000 ;



// app.listen(port)



const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/products',(req,res)=>{
const products = [
    {id:1,name:'product1'},
    {id:2,name:'product2'}
]
res.json(products)

})

app.get('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const products = [
    {id:1,name:'product1'},
    {id:2,name:'product2'}
]
    const s = products.find((v)=>v.id==id)
    if(s){

        res.json(s)
    }else{
        res.status(404);
        res.send('not found');
    }
})


app.listen(3000)