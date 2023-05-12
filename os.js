// modeule name:OS module
// The OS module provides information about the computer's operating system.
// example
const os = require('os');

console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`CPU architecture: ${os.arch()}`);
console.log(`Total memory: ${os.totalmem() / 1024 / 1024} MB`);
console.log(`Free memory: ${os.freemem() / 1024 / 1024} MB`);
console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`Load average: ${os.loadavg()}`);

