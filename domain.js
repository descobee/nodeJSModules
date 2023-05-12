//name:Domain module
// description:The domain module is a deprecated module in Node.js that provided a way to handle uncaught errors and exceptions that occur in the context of a specific domain. A domain is a way to group related I/O operations and associate them with a common error handler.
// example
const domain = require('domain');

const server = require('http').createServer();

const myDomain = domain.create();

myDomain.on('error', (err) => {
  console.log(`Caught error: ${err}`);
});

myDomain.run(() => {
  server.on('request', (req, res) => {
    // Some code that might throw an error
    throw new Error('Oops!');
  });

  server.listen(3000);
});
