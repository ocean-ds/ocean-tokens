const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const mobileGlobs = require('../utils/mobileGlobs');
const gulpLoadFiles = require('../utils/gulpLoadFiles');

require('./setupTheo')(theo);
const $ = gulpLoadPlugins();

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
