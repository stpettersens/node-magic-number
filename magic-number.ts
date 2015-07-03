/*
	Magic number detection for Node.js
	Copyright 2015 Sam Saint-Pettersen

	Released under the MIT License.
*/

/// <reference path="typings/node.d.ts" />

import fs = require('fs');

function toChar(dec: number): string {
	return String.fromCharCode(dec);
}

class MagicNumber {

	private static mimes: string[];
	private static ids: string[];

	private static loadFileTypes(): void {
		if(fs.existsSync('file.types')) {
			var data: Buffer = fs.readFileSync('file.types');
			for(var i: number = 0; i < data.length; i++) {
				console.log(toChar(data[i]));
			}
			process.exit(-1);
		}
		else {
			console.log('Error in magicnumber module: file.types file missing.')
			process.exit(-1);
		}
	}

	public static detectFile(file: string): string {
		MagicNumber.loadFileTypes();
		var type: string = 'Error: File doesn\'t exist.';
		if(fs.existsSync(file)) {
			var mn: Buffer = fs.readFileSync(file);
			if(toChar(mn[0]) == 'P' && toChar(mn[1]) == 'K') {
				type = 'application/zip';
			}
			else {
				type = 'unknown';
			}
 		}
		return type;
	}
}

export = MagicNumber;
