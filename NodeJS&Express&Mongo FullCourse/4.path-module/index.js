// const path = require('path');

// console.log(path.dirname('directort nae',__filename)) // dirname returns full path
// console.log(path.basename(__filename)) // file name
// console.log(path.extname(__filename)) // file extenstion

// const joinPath = path.join('/user','documents','node','projects')
// console.log(joinPath)

// const resolvePath = path.resolve('user','documents','node','project');
// console.log(resolvePath)


// const normalizePath = path.normalize('/user/.documents/../node/projects');
// console.log(normalizePath)
const path = require('path')

console.log('folder path',path.dirname(__filename))
console.log('filename',path.basename(__filename))
console.log('extension',path.extname(__filename))

console.log(path.join('/user','document','node'))
console.log(path.resolve('/user','document'))
console.log(path.normalize('/user//document'))

