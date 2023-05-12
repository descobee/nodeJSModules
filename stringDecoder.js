//module name: string decoder module
//description : The String Decoder module provides a way of decoding Buffer objects into strings.
// example
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;
