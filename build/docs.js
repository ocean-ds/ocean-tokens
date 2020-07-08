const gulp = require('gulp');
const dom = require('gulp-dom');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('build:docs:html', () =>
  gulp
    .src('src/tokens.yml')
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'html' },
      })
    )
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('dist/docs'))
);

gulp.task('build:docs:set-base-url', () =>
  gulp
    .src('dist/docs/index.html')
    .pipe(
      dom(function () {
        const header = this.querySelector('head');
        const base = this.createElement('base');
        base.href = 'https://pagnet.github.io/design-tokens/';

        header.appendChild(base);
        return this;
      })
    )
    .pipe(gulp.dest('dist/docs'))
);

exports.build = gulp.series('build:docs:html', 'build:docs:set-base-url');
