const gulp = require('gulp');
const path = require('path');
const theo = require('theo');
require('../build/ios/setup')(theo);

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

function buildCreator(rootPath, output) {
  return function build() {
    return gulp
      .src(rootPath)
      .pipe(
        $.theo({
          transform: { type: 'ios' },
          format: { type: 'json' },
        })
      )
      .pipe($.rename(output))
      .pipe(gulp.dest(path.join(__dirname, '../../dist/ios')));
  };
}

exports.build = gulp.parallel(
  buildCreator('src/mobile-ios-color-tokens.yml', 'tokens-color.json'),
  buildCreator(
    'src/mobile-ios-typography-tokens.yml',
    'tokens-typography.json'
  ),
  buildCreator('src/mobile-ios-size-tokens.yml', 'tokens-size.json'),
  buildCreator('src/mobile-ios-shadow-tokens.yml', 'tokens-shadow.json'),
  buildCreator('src/mobile-ios-font-name-tokens.yml', 'tokens-fontNames.json'),
  buildCreator('src/mobile-tokens.yml', 'tokens.json')
);
