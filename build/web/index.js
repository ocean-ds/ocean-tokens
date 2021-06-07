const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('build:web:scss', () =>
  gulp
    .src('src/tokens.yml')
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'scss' },
      })
    )
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build:web:js', () =>
  gulp
    .src('src/tokens.yml')
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'module.js' },
      })
    )
    .pipe($.rename('tokens.js'))
    .pipe(gulp.dest('dist/web'))
);

exports.build = gulp.parallel('build:web:scss', 'build:web:js');
