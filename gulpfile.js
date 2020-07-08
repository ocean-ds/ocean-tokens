const gulp = require('gulp');
const docs = require('./scripts/tasks/docs');
const android = require('./scripts/tasks/android');
const ios = require('./scripts/tasks/ios');

gulp.task('build:docs', gulp.series([docs.build, docs.setBaseURL]));
gulp.task('build:android', android.build);
gulp.task('build:ios', ios.build);
