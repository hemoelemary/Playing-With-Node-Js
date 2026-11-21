/* in simple words : event emitter has on emit once 

on means when this event emitted do this call back function

emit means emit this callback function

once mean when this event emitted do this once only



*/


const {EventEmitter} = require('events');

e = new EventEmitter;

e.on('greet',(name)=>{console.log(name)})

e.emit('greet','hi');
