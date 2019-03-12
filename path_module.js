/**path module **************************/
const path = require('path');

//get file path
console.log(__filename)

//get exactly filename
console.log(path.basename(__filename))

//get current directory anme
console.log(path.dirname(__filename))

//get extension of file
console.log(path.extname(__filename))

//get object of file
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname,'test','hello.html'));