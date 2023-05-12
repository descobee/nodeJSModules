//module name: net module
// Description :The Net module provides a way of creating TCP servers and TCP clients.
//Example
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
    socket.write(`You said: ${data}`);
  });
  
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server started');
});

