let fs = require('fs');
let path = require('path');

fs.writeFileSync("content.md", "");

fs.readFile('./content.md',(error, content) => {
    console.log(error,content);
})

let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());