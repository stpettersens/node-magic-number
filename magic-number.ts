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

	public static detectFile(file: string): string {
		var type: string = 'Error: File doesn\'t exist.';
		if(fs.existsSync(file)) {
			var mn: Buffer = fs.readFileSync(file);
			console.log(mn);
			if(toChar(mn[0]) == 'P' && toChar(mn[1]) == 'K') {
				type = 'application/zip';
			}
			else if(toChar(mn[0]) == '7' && toChar(mn[1]) == 'z') {
				type = 'application/x-7z-compressed';
			}
			else if(mn[0] == 253 && toChar(mn[1]) == '7' && toChar(mn[2]) == 'z') {
				type = 'application/x-xz';
			}
			else if(toChar(mn[0]) == 'R' && toChar(mn[1]) == 'a' && toChar(mn[2]) == 'r') {
				type = 'application/x-rar-compressed';
			}
			else if(toChar(mn[0]) == 'G' && toChar(mn[1]) == 'I' && toChar(mn[2]) == 'F') {
				type = 'image/gif';
			}
			else if(toChar(mn[1]) == 'P' && toChar(mn[2]) == 'N' && toChar(mn[3]) == 'G') {
				type = 'image/png';
			}
			else if(mn[0]== 255 && mn[1] == 216 && mn[2] == 255) {
				type = 'image/jpeg';
			}
			else {
				type = 'unknown';
			}
 		}
		return type;
	}
}

export = MagicNumber;
