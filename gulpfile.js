const gulp = require('gulp');
const del = require('del');

const site = require('./build/site');
const web = require('./build/web');
const android = require('./build/android');
const ios = require('./build/ios');

gulp.task('clean:dist', () => del('dist/**', { force: true }));

gulp.task('build:site', site.build);
gulp.task('build:web', web.build);
gulp.task('build:android', android.build);
gulp.task('build:ios', ios.build);

gulp.task(
  'build:lib',
  gulp.series(
    'clean:dist',
    gulp.parallel('build:web', 'build:android', 'build:ios')
  )
);

gulp.task('build:all', gulp.series('build:lib', 'build:site'));
