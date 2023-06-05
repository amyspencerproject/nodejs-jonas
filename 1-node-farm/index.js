const fs = require('fs');
const http = require('http');
const url = require('url');
//  FILES *****************

// blocking, synchronous way
// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', 'textOutput')
// console.log('File Written!');

//non-blocking, async way

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! 💥')
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
//                 console.log("Your file has been written 😁");
//             })
//         });
//     });
// });
// console.log('Will read file!');

//  SERVER *****************

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW!');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT!');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on Port 8000')
})

