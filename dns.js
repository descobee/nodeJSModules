//module name:dns module
//description:The DNS module provides a way of performing name resolutions.
// example.
var dns = require('dns');
var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
});