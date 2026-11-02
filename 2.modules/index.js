// allows to use the function from ./greet so we can use it
const greet = require('./greet')
const cat = require('./cat')
const {person1,person2,person3} = require('./peoples')
greet(person1)
greet(person2)
greet(person3)
greet('huxn')
meow('rosa')
