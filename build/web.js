const gulp = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('build:web:scss', () =>
  gulp
    .src(['src/tokens.yml'])
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
    .src(['src/tokens.yml'])
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'module.js' },
      })
    )
    .pipe(gulp.dest('dist/web'))
);

exports.build = gulp.parallel('build:web:scss', 'build:web:js');
