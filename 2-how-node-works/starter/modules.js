// console.log(arguments);
// console.log(require('mdoule).wrapper);

// module.exports
// const C = require('./test-module-1');
// const calc1 = new C();
// console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 5));
// console.log(calc2.multiply(2, 5));
// console.log(calc2.divide(2, 5));
// console.log(calc2(2, 5));
// this doesn't work because calc2 is not a function
// const { add, multiply, divide } = require('./test-module-2');
// console.log(multiply(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
