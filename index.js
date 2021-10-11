const {default: goodTestFunction} = require('./good');
const {default: badTestFunction} = require('./bad');

console.log('good func with param');
console.log(goodTestFunction('a'));

console.log('good func w/o param');
console.log(goodTestFunction());

console.log('bad func with param');
console.log(badTestFunction('a'));

console.log('bad func w/o param');
console.log(badTestFunction());