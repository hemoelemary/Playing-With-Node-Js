const lodash = require('lodash')

const names = ['hamoda','john']

const capital = lodash.map(names,lodash.capitalize);
console.log(capital)