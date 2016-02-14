var gulp = require('gulp');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var inline_base64 = require('gulp-inline-base64');
var runSequence = require('run-sequence');

gulp.task('index', function() {
  gulp.src(['src/index.html'])
    .pipe(inline({
      base: 'src/',
      js: uglify,
      css: minifyCss,
      disabledTypes: ['svg', 'js'],
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('f20160312', function() {
  gulp.src(['src/20160312/20160312.html'])
    .pipe(inline({
      base: 'src/20160312/',
      js: uglify,
      css: minifyCss,
      disabledTypes: ['svg', 'js'],
    }))
    .pipe(gulp.dest('build/'));
});
