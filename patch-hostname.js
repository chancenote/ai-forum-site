const os = require('os');
const originalHostname = os.hostname;
os.hostname = () => 'chan-desktop'; // ASCII override
console.log('Patched os.hostname() to return "chan-desktop"');
