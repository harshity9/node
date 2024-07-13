const fs = require('fs')

fs.readFile('lorem.txt','utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})



// console.log("hello world")
// const add = (2+3)
// console.log(add)