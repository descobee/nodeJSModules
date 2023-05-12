//name: TTY module
//Description:Provides classes used by a text terminal
// example
const tty = require('tty');

if (tty.isatty(process.stdin)) {
  console.log('Please enter some input:');
}

process.stdin.on('data', (data) => {
  console.log(`You entered: ${data.toString().trim()}`);
});
