//module name: HTTPS Module
//Description:The HTTPS module provides a way of making Node.js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.
// exaample
var https = require('https');

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
