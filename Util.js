// name:Util Module
// Description : The Util module provides access to some utility functions.
// example

var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);

console.log(result);