const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

require('./setupTheo')(theo);
const $ = gulpLoadPlugins();

exports.build = () =>
  gulp
    .src(['src/mobile-tokens.yml'])
    .pipe(
      $.theo({
        transform: { type: 'android' },
        format: { type: 'xml' },
      })
    )
    .pipe($.rename('tokens.xml'))
    .pipe(gulp.dest('dist/android'));
