const fs = require('fs')


if(!fs.existsSync('./news')){

    fs.mkdir('./news',( errr)=>{
        if (errr) throw errr;
        console.log('dir created')
})
};

if(fs.existsSync('./news')){

    fs.rmdir('./news',( errr)=>{
            if (errr) throw errr;
            console.log('dir deleted')
    })
    };