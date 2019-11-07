const { sum } = require('./mathFunctions');
// process.argv

let first = parseInt(process.argv[2]);
let second = parseInt(process.argv[3]);

console.log(sum(first, second));
