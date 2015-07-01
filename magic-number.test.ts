/// <require path="magic-number.ts" />

import magic = require('./magic-number');
import fs = require('fs');

var ids: any[] = [
'PK', '7z', 'ý7z', 'Rar', 'GIF', ' PNG', 'ÿØÿà', '%!PS',
'%PDF', 'Êþº¾', '8BPS', 'OggS'
];
var exts: string[] = [
'love', '7z', 'xz', 'rar', 'gif', 'png', 'jpg', 'ps',
'pdf', 'class', 'psd', 'ogg'
];

for(var i: number = 0; i < ids.length; i++) {
  var buffer = new Buffer(100);
  buffer.write(ids[i], 'binary');
  fs.writeFileSync('test.' + exts[i], buffer);
  console.log(magic.detectFile('test.' + exts[i]));
  fs.unlinkSync('test.' + exts[i]);
}
