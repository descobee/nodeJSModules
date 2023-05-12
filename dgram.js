//module name:dgram module
/*description:The dgram module provides a way of working with Datagram sockets.
It can be used to send messages from one computer/server to another.*/
//example
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.send(Buffer.from('abc'), 8080, 'localhost');

/*Remember to initiate the file:

C:\Users\Your Name>node demo_dgram_send.js*/