//module name: file system
// description :The File System module provides a way of working with the computer's file system.
//example
var fs = require('fs');

fs.readFile('demofile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});