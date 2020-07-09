const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('build:site:html', () =>
  gulp
    .src('src/tokens.yml')
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'html' },
      })
    )
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('static'))
);

gulp.task('build:site:set-base-url', () =>
  gulp
    .src('static/index.html')
    .pipe(
      $.dom(function () {
        const header = this.querySelector('head');
        const base = this.createElement('base');
        base.href = 'https://pagnet.github.io/design-tokens/';

        header.appendChild(base);
        return this;
      })
    )
    .pipe(gulp.dest('static'))
);

exports.build = gulp.series('build:site:html', 'build:site:set-base-url');
