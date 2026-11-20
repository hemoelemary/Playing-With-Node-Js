// const fs = require('fs');
// const path = require('path');

// const Fold = path.join(__dirname,'Fold');

// if(!fs.existsSync(Fold)){
//     fs.mkdirSync(Fold);
// }

// const filepath = path.join(Fold,'example.txt')
// // sync way of creating
// fs.writeFileSync(filepath,'hello from node');






const fs = require('fs');
const path = require('path');


const new_folder = path.join(__dirname,'new_folder');
// if(!fs.existsSync(new_folder)){
//     fs.mkdirSync(new_folder);
// }

file = path.join(new_folder,'file.txt')
fs.writeFileSync(file,'hello')

const Read = fs.readFileSync(file,'utf8');
console.log(Read)

fs.appendFileSync(file,'\n new line')
console.log('new content',fs.readFileSync(file,'utf8'))

// async

const asyncfile = path.join(new_folder,'file-as.txt')
fs.writeFile(asyncfile,'hello asyncs node js',(err)=>{
    if(err) throw err;
    console.log('async file created')
    fs.readFile(asyncfile,'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data)
        fs.appendFile(asyncfile,'\n new line added',(err)=>
        {
            if(err) throw error;
            console.log('append new line')
        })
    })
})