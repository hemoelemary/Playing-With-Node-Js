// const events = require('events');

// const e = new events();


// // register listener
// e.on('greet',(name)=>{console.log(name)})

// e.emit('greet','hamoda')


const event = require('events');

e = new event;

e.on('greet',(name)=>{
    console.log(name)
})

e.emit('greet','hamoda')