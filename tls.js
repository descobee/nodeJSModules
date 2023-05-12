//name : TLS Module
// description :The TLS module provides a way of implementing TLS (Transport Layer Security) and SSL (Secure Socket Layer).
// example
const fs = require('fs');
const https = require('tls');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = https.createServer(options, (socket) => {
  console.log('Client connected');
  
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
    socket.write(`You said: ${data}`);
  });
  
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(443, () => {
  console.log('Server started');
});

