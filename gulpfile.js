'use strict';

var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    source      = require('vinyl-source-stream'),
    del         = require('del')
    ;

var project = ts.createProject('src/tsconfig.json', {typescript: typescript});

gulp.task('compile', function () {
  var result = gulp.src('src/**/*{ts,tsx}')
    .pipe(ts(project));
  return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('bundle', ['compile'], function () {
  gulp.src('./.tmp/bootstrap.js')
      .pipe(browserify({
        insertGlobals : true,
        require: ["./bootstrap.js"]
      }))
      .pipe(gulp.dest('dist'))
});

gulp.task('clean', function (done) {
  del(['.tmp'], done.bind(this));
});


