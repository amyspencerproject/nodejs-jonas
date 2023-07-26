const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1 read file into variable and then send to client
  //   the entire test-file.txt file has to be down loaded before moving on so not good for a real world app
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Solution 2 use streams and no overload on the memory.
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.on('data', (chunk) => {
  //     // chunk is the data and res is a writable stream
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('File not found!');
  //   });

  // Solution 3 takes backpressure into account by using pipe() operator
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('I am listening . . . .');
});
