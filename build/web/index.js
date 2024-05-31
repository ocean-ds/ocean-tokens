const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
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
    .src('src/tokens.yml', { sourcemaps: true })
    .pipe(
      $.theo({
        transform: { type: 'web' },
        format: { type: 'module.js' },
      })
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe($.rename('tokens.js'))
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build:web:ts', () =>
  gulp
    .src('dist/web/tokens.js')
    .pipe(
      typescript({
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        module: 'amd',
        declaration: true,
        allowJs: true,
      })
    )
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build:web', gulp.parallel('build:web:scss', 'build:web:js'));

exports.build = gulp.series('build:web', 'build:web:ts');
