//name : Punycode Module
/*Description: A character encoding scheme
provides a way to encode and decode Unicode domain names using the Punycode algorithm. The Punycode algorithm is a way to represent Unicode domain names using only ASCII characters, which is necessary for compatibility with older systems that do not support Unicode.
*/
//example
const punycode = require('punycode');

const domain = 'xn--tst-qla.de'; // This is the Punycode representation of the Unicode domain name "täst.de"

const unicodeDomain = punycode.decode(domain);

console.log(`Unicode domain: ${unicodeDomain}`);

const punycodeDomain = punycode.encode('täst.de');

console.log(`Punycode domain: ${punycodeDomain}`);
