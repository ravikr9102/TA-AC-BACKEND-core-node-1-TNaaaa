var os = require('os');

console.log('Welcome to Nodejs');

var cpus = os.cpus().length;
var freeM = os.freemem();
var uptime = os.uptime();

console.log(cpus,freeM,uptime);

var {readFile, readFileSync, unlink} = require('fs');

var sync = readFileSync('./app.js')

var async = readFile('./app.js', (err,content) => {
    console.log(err,content.toString());
})