const gulp = require('gulp');
const path = require('path');
const theo = require('theo');
require('../build/android/setup')(theo);

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

exports.build = function build() {
  return gulp
    .src(['src/mobile-tokens.yml'])
    .pipe(
      $.theo({
        transform: { type: 'android' },
        format: { type: 'xml' },
      })
    )
    .pipe(gulp.dest(path.join(__dirname, '../../dist/android')));
};
