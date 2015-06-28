/// <require path="magic-number.ts" />

import magic = require('./magic-number');

console.log(magic.detectFile('test.love'));
console.log(magic.detectFile('test.rar'));
console.log(magic.detectFile('test.xz'));
console.log(magic.detectFile('test.png'));
console.log(magic.detectFile('test.gif'));
console.log(magic.detectFile('test.jpg'));
