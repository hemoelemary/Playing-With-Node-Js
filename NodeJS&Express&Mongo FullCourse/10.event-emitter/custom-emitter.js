const { EventEmitter } = require('events');

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.gree = 'hello'
    }
    greet(name){
        this.emit('greet',`${this.gree} ${name}`)
    }
}

const e = new MyCustomEmitter();

e.on('greet',(inp)=>{console.log(inp)})

e.greet('sa')