const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

require('./setupTheo')(theo);
const $ = gulpLoadPlugins();

const buildCreator = (rootPath, output) =>
  function build() {
    return gulp
      .src(rootPath)
      .pipe(
        $.theo({
          transform: { type: 'ios' },
          format: { type: 'json' },
        })
      )
      .pipe($.rename(output))
      .pipe(gulp.dest('dist/ios'));
  };

exports.build = gulp.parallel(
  buildCreator('src/color/index.yml', 'tokens-color.json'),
  buildCreator('src/typography/index.yml', 'tokens-typography.json'),
  buildCreator('src/mobile-ios-size-tokens.yml', 'tokens-size.json'),
  buildCreator('src/shadow/index.yml', 'tokens-shadow.json'),
  buildCreator('src/typography/ios-font-names.yml', 'tokens-fontNames.json'),
  buildCreator('src/mobile-tokens.yml', 'tokens.json')
);
