/**File system ****************************************/
const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) =>{
//     if(err) throw err;
//     console.log("Folder created")
// })

//create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', (err) =>{
//     if(err) throw err;
//     console.log("File written too..")

//     //append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I Love Node.js', (err) =>{
//         if(err) throw err;
//         console.log("appended too..")
//     })
// })

//read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) =>{
//     if(err) throw err;
//     console.log(data)
// })

//rename File
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) =>{
//     if(err) throw err;
//     console.log("file rename")
// })