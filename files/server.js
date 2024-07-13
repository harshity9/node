const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'lorem.txt'),'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'lorem2.txt'),'utf8gchgjvnhvhvjhhvjhvj', (err)=>{
    if(err) throw err;
    console.log('done');
})

fs.appendFile(path.join(__dirname, 'lorem2.txt'),'\n\n No textsss', (err)=>{
    if(err) throw err;
    console.log('append complete');
})


// console.log("hello world")
// const add = (2+3)
// console.log(add)