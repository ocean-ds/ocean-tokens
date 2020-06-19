const gulp = require('gulp');
const dom = require('gulp-dom');
const path = require('path');

const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('build-docs', () => {
  return gulp
    .src(path.join(__dirname, '../src/tokens.yml'))
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'html' },
      })
    )
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../dist/docs')));
});

gulp.task('doc-base-url', () => {
  return gulp
    .src(path.join(__dirname, '../dist/docs/index.html'))
    .pipe(
      dom(function () {
        // cache/create all elements you will work with --'this' is your Document
        const header = this.querySelector('head');
        const base = this.createElement('base');
        base.href = 'https://pagnet.github.io/design-tokens/';

        header.appendChild(base);
        return this;
      })
    )
    .pipe(gulp.dest(path.join(__dirname, '../dist/docs')));
});

gulp.task('docs', gulp.series(['build-docs', 'doc-base-url']));
