//name of module:crypto module
//description: The crypto module provides a way of handling encrypted data.
//example
var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr); //34feb914c099df25794bf9ccb85bea72