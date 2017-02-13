#### Magic-number
[![Build Status](https://travis-ci.org/stpettersens/node-magic-number.svg?branch=master)](https://travis-ci.org/stpettersens/node-magic-number) [![npm version](https://badge.fury.io/js/magic-number.svg)](http://npmjs.org/package/magic-number) [![Development Dependency Status](https://david-dm.org/stpettersens/node-magic-number/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/node-magic-number#info=devDependencies) 

Node.js module to determine a file's type from its magic number.

Use from JavaScript:

```js
var magic = require('magic-number');
magic.loadFileTypes(); // Equivalent to magic.loadFileTypes("file.types")
magic.detectFile('file.zip'); // ==> 'application/zip'
magic.detectFile('file.7z');  // ==> 'application/x-7z-compressed'
```

Use from [TypeScript](http://www.typescriptlang.org):

```ts
/// <require path="typings/magic-number.d.ts" />
import magic = require('magic-number');
magic.loadFileTypes(); // Equivalent to magic.loadFileTypes("file.types")
magic.detectFile('file.zip'); // ==> 'application/zip'
magic.detectFile('file.7z');  // ==> 'application/x-7z-compressed'
```

Methods:

**magic.loadFileTypes(definitions: string = "file.types"): void**

Parameter *definitions* is path string for file containing definitions.
If omitted, defaults to *file.types* in current working directory.

You should call this method before invoking *magic.detectFile(file)*.

**magic.detectFile(file: string): string**

Parameter *file* is path string for the file to test.
Returns a MIME type for the tested file, 'unknown' if file type is not known.
