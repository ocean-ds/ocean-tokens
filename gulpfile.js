const gulp = require('gulp');
const del = require('del');

const doc = require('./build/doc');
const web = require('./build/web');
const android = require('./build/android');
const ios = require('./build/ios');

gulp.task('clean:dist', () => del('dist/**', { force: true }));
gulp.task('copy:assets', () =>
  gulp.src('assets/**/*').pipe(gulp.dest('dist/assets'))
);
gulp.task('copy:files', () =>
  gulp
    .src(['package.json', 'README.md', 'CHANGELOG.md', 'LICENSE'])
    .pipe(gulp.dest('dist'))
);

gulp.task('build:doc', doc.build);
gulp.task('build:web', web.build);
gulp.task('build:android', android.build);
gulp.task('build:ios', ios.build);

gulp.task(
  'build:lib',
  gulp.series(
    'clean:dist',
    gulp.parallel(
      'copy:assets',
      'copy:files',
      'build:web',
      'build:android',
      'build:ios'
    )
  )
);

gulp.task('default', gulp.series('build:lib', 'build:doc'));
