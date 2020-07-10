const gulp = require('gulp');
const theo = require('theo');
const $ = require('gulp-load-plugins')();

require('./setupTheo')(theo);
const mobileGlobs = require('../utils/mobileGlobs');
const gulpLoadFiles = require('../utils/gulpLoadFiles');

exports.build = () =>
  gulpLoadFiles(mobileGlobs)
    .pipe(
      $.theo({
        transform: { type: 'android' },
        format: { type: 'xml' },
      })
    )
    .pipe($.rename('tokens.xml'))
    .pipe(gulp.dest('dist/android'));
