// index.js here is a root file under his folder
// module.exports -> export
// require -> import

const firstModule = require('./module1')

console.log(firstModule.sum(1,2));

try{
console.log('trying to divide by zero');
let result = firstModule.div(1,0)
console.log(result)
}catch(error){
    console.log('caught',error.message)
}


const module2 = require('./module2')
module2.Meow('jasper')

try{
    console.log(3/0)
}catch(error){
    console.log(error.message)
}finally{
    console.log('done')
}