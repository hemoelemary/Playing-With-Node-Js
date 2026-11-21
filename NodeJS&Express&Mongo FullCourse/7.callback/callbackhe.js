const fs = require('fs');
fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err)
        return;
    }
    const modify = data.toUpperCase();
    console.log(modify)
    fs.writeFile('output.txt',modify,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        fs.readFile('output.txt',(err,data)=>{
            console.log(data)
        })
    });
}
)