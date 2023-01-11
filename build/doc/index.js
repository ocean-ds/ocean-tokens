const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('build:doc:html', () =>
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

gulp.task('build:doc:set-base-url', () =>
  gulp
    .src('static/index.html')
    .pipe(
      $.dom(function setUrl() {
        const header = this.querySelector('head');
        const base = this.createElement('base');
        base.href = 'https://ocean-ds.github.io/ocean-tokens/';

        header.appendChild(base);
        return this;
      })
    )
    .pipe(gulp.dest('static'))
);

exports.build = gulp.series('build:doc:html', 'build:doc:set-base-url');
