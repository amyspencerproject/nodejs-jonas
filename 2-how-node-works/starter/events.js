const EventEmitter = require('events');
const http = require('http');

// Sales is the parent class, EventEmitter is the super class
class Sales extends EventEmitter {
  constructor() {
    // must run super because we are extending the super class of EventEmitter
    super();
  }
}

const myEmitter = new Sales();

// const myEmitter = new EventEmitter();

// these are the observers listening for an event
// that is what the .on is doing, observing or listening for the "newSale" event to occur
myEmitter.on('newSale', () => {
  // once the event is observed the this call back function runs
  console.log('Yipee! There was a new sale!!');
});

// you can set up multiple listeners for the same event
myEmitter.on('newSale', () => {
  console.log('Customer Name: Pippin Turnipseed');
});

// this is the object that emits hence the .emit
// we are emitting an event called newSale
// the emit is like clicking on a button
// myEmitter.emit('newSale');

myEmitter.on('newSale', (stock) => {
  console.log(`There are ${stock} left in stock`);
});

// now add another argument
myEmitter.emit('newSale', 9);

//////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received!🐬');
  console.log(req.url);
  res.end('Request received!🐙');
});

server.on('request', (req, res) => {
  console.log('Request received again!🌊');
  // res.end('Request received!🏄‍♂️');
});

server.on('close', () => {
  console.log('Server is closed🦞');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests . . . . ');
});
