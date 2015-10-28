'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./bower_components/iCheck/icheck.js', './src/fancy-checkbox.js'])
    .pipe(concat('fancy-checkbox.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['scripts']);
