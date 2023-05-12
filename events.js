//module name:events module
//description:The Events module provides a way of working with events.
//In Node.js, all events are an instance of the EventEmitter object
//example.

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream')
