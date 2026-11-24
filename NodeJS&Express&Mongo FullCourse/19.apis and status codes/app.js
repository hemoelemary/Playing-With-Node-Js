const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.get('/users',(req,res)=>{
    res.status(200).json({
        message:'User Fetched Succefully'
    })
})

/*

REQUEST Summary (جايبها عشان افتكرها لما احتاجلها)

1xx informational : information about request
2xx success : request success
3xx Redirection : redirect
4xx client error : problem in request
5xx Server Error : server problem

200 ok
201 created
202 accepted : request accepted to be processed later
204 No content : succeed with no response

400	Bad Request	البيانات المرسلة غير صحيحة
401	Unauthorized	المستخدم غير موثّق الدخول
403	Forbidden	المستخدم معروف لكن ليس لديه صلاحية
404	Not Found	المورد المطلوب غير موجود
409	Conflict	تعارض مثل Email مسجل بالفعل
422	Unprocessable Content	الطلب مفهوم لكن محتواه غير قابل للمعالجة

401: أنت مين؟ لم يتم إثبات هويتك.
403: عارف أنت مين، لكن مش مسموح لك تعمل العملية دي.

500	Internal Server Error	خطأ غير متوقع في السيرفر
502	Bad Gateway	السيرفر استقبل ردًا غير صالح من خدمة أخرى
503	Service Unavailable	الخدمة غير متاحة مؤقتًا
504	Gateway Timeout	خدمة أخرى اتأخرت في الرد

REST API 
REST is way to oraganize the using of resources using http

api/products GET,POST
api/products/:id GET PUT PATCH DELETE

PUT PATCH 

PATCH : PART Of Resource

PUT : Change all the resource

*/
const Product = mongoose.Schema({
name:{
    type:String,
    required:true
}
})

//GET
app.get('/api/products',async (req,res)=>{
    const products = await Product.find();
    res.status(200).json(products);
})

//POST
app.post('/api/products',async(req,res)=>{
    const product = await Product.create(req.body);
    res.status(201).json(product)
})

// GET BY ID
app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.status(200).json(product);
});

// PATCH
app.patch('/api/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.status(200).json(product);
});

// DELETE
app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.status(204).send();
});