//module name:Query String Module
// description: The Query String module provides a way of parsing the URL query string.
// example
var querystring = require('querystring');
var q = querystring.parse('year=2023&month=may');
console.log(q.year)