/*
  Build operations for magic-number.
*/
var gulp = require('gulp'),
      fs = require('fs'),
     tsc = require('gulp-typescript'),
 replace = require('gulp-replace');

gulp.task('default', function() {
  return gulp.src('*.ts')
  .pipe(tsc({
    noImplicitAny: true,
    module: 'commonjs'
  }))
  .pipe(replace(/\/{3}\s*<reference path=.*\/>\r*\n*/g, ''))
  .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  fs.unlinkSync('magic-number.js');
  fs.unlinkSync('magic-number.test.js');
});
