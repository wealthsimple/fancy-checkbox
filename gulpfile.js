'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssBase64 = require('gulp-css-base64');

gulp.task('scripts', function() {
  return gulp.src(['./bower_components/iCheck/icheck.js', './src/fancy-checkbox.js'])
    .pipe(concat('fancy-checkbox.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./src/fancy-checkbox.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

gulp.task('inline', function() {
  return gulp.src('./src/fancy-checkbox.css')
    .pipe(cssBase64({
      extensionsAllowed: ['.png']
    }))
    .pipe(gulp.dest('./'));
})

gulp.task('default', ['scripts', 'sass', 'inline']);
