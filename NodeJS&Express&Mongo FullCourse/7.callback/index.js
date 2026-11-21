
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{})
//     })
// })

const fs = require('fs');

function person(name,callbacl){
console.log(`hello ${name}`)
callbacl()
}

function address(){
    console.log('address')
}

person('hamoda',address)

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.error('error reading file')
        return;
    }
    console.log(data)
})
