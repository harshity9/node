const fs =  require('fs');

const rs = fs.createReadStream('lorem8', {encoding:'utf-8'});

const ws = fs.createWriteStream('new-lorem.txt');

rs.pipe(ws);
console.log("hreihfie")
console.log(4+3)