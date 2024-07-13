
const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async()=>{
    try {
        const data = 

        await fsPromises.writeFile(path.join(__dirname, '../files', 'lorem5.txt'),'hello check mic testing');
        console.log('wrote')

        await fsPromises.writeFile(path.join(__dirname, '../files', 'lorem4.txt'),'hello check mic testing');
        console.log('wrote')

        await fsPromises.appendFile(path.join(__dirname, '../files', 'lorem5.txt'),'\n\n its billooo');

        await fsPromises.rename(path.join(__dirname, '../files', 'lorem5.txt'),'lorem8');

        await fsPromises.unlink(path.join(__dirname, '../files', 'lorem4.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, '../files','lorem8'),'utf-8');
        console.log(newData)
    } catch (error) {
        console.error(error)
    }
}
fileOps();





// fs.readFile(path.join(__dirname, 'lorem.txt'),'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'lorem2.txt'),'utf8gchgjvnhvhvjhhvjhvj', (err)=>{
//     if(err) throw err;
//     console.log('done');
// })

// fs.appendFile(path.join(__dirname, 'lorem2.txt'),'\n\n No textsss', (err)=>{
//     if(err) throw err;
//     console.log('append complete');

//     fs.rename(path.join(__dirname, 'lorem2.txt'),path.join(__dirname, 'lorem4.txt'), (err)=>{
//         if(err) throw err;
//         console.log('renamed');
//     })


// })


// console.log("hello world")
// const add = (2+3)
// console.log(add)