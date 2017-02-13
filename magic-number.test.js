/* 
Tests for magic number.
Invoke npm run test
*/

var magic = require('./magic-number.js'),
should = require('should'),
fs = require('fs');
             
describe('Detect various file types from magic number', function() {
    it('Return MIME types for some generated files', function(done) {
        var mimes = [];
        var ids = [];
        var exts = [];  
                        
        var data = fs.readFileSync('file.types');
        var lines = data.toString().split('\n');
        
        for(var x = 0; x < lines.length; x++) {
            var mi = lines[x].split(':');
            if(mi[0] != '') {
                mimes.push(mi[0]);
                ids.push(mi[1]);
            }
        }
        
        data = fs.readFileSync('file.exts');
        lines = data.toString().split('\n');
        for(var y = 0; y < lines.length; y++) {
            if(lines[y] != '') exts.push(lines[y]);
        }

        magic.loadFileTypes(); // Uses default parameter: 'file.types'.
        
        for(var i = 0; i < exts.length; i++) {
            var buffer = new Buffer(100);
            buffer.write(ids[i], 'binary');
            fs.writeFileSync('test' + exts[i], buffer);
            console.log('test' + exts[i] + ' ==> ' + magic.detectFile('test' + exts[i]));
            magic.detectFile('test' + exts[i]).should.equal(mimes[i]).and.be.a.String;
            fs.unlinkSync('test' + exts[i]);
        }
        done();
    });
});
