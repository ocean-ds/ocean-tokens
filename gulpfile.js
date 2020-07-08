const gulp = require('gulp');
const del = require('del');

const docs = require('./build/docs');
const android = require('./build/android');
const ios = require('./build/ios');

gulp.task('clean:dist', function () {
  return del('dist/**', { force: true });
});

gulp.task('build:docs', docs.build);
gulp.task('build:android', android.build);
gulp.task('build:ios', ios.build);

gulp.task(
  'build:all',
  gulp.series(
    'clean:dist',
    gulp.parallel('build:docs', 'build:android', 'build:ios')
  )
);
