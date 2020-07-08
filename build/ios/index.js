const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const gulpLoadFiles = require('../utils/gulpLoadFiles');
const mobileGlobs = require('../utils/mobileGlobs');

require('./setupTheo')(theo);
const $ = gulpLoadPlugins();

const buildCreator = (globs, output) =>
  function buildSpecForIOS() {
    return gulpLoadFiles(globs)
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
  buildCreator(
    [
      'src/border/index.yml',
      'src/opacity/index.yml',
      'src/radius/index.yml',
      'src/spacing/inline.yml',
      'src/spacing/inset.yml',
      'src/spacing/stack.yml',
    ],
    'tokens-size.json'
  ),
  buildCreator('src/shadow/index.yml', 'tokens-shadow.json'),
  buildCreator(
    ['src/typography/font-family.yml', 'src/typography/font-weight.yml'],
    'tokens-fontNames.json'
  ),
  buildCreator(mobileGlobs, 'tokens.json')
);
