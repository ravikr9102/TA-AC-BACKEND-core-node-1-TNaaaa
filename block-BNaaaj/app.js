var area = require('./area');

var circleArea = area.circle(10);

console.log(circleArea);

var buffer1 = Buffer.alloc(12);
var buffer2 = Buffer.allocUnsafe(12);

buffer1.write('Hello World');
console.log(buffer1.toString());