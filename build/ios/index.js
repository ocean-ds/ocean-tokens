const gulp = require('gulp');
const theo = require('theo');
const $ = require('gulp-load-plugins')();

require('./setupTheo')(theo);
const gulpLoadFiles = require('../utils/gulpLoadFiles');
const mobileGlobs = require('../utils/mobileGlobs');
const withName = require('../utils/withName');

const buildCreator = (globs, output) => () =>
  gulpLoadFiles(globs)
    .pipe(
      $.theo({
        transform: { type: 'ios' },
        format: { type: 'json' },
      })
    )
    .pipe($.rename(output))
    .pipe(gulp.dest('dist/ios'));

exports.build = gulp.parallel(
  withName('build:ios:color')(
    buildCreator('src/color/index.yml', 'tokens-color.json')
  ),
  withName('build:ios:typography')(
    buildCreator('src/typography/index.yml', 'tokens-typography.json')
  ),
  withName('build:ios:typography')(
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
    )
  ),
  withName('build:ios:shadow')(
    buildCreator('src/shadow/index.yml', 'tokens-shadow.json')
  ),
  withName('build:ios:fontNames')(
    buildCreator(
      ['src/typography/font-family.yml', 'src/typography/font-weight.yml'],
      'tokens-fontNames.json'
    )
  ),
  withName('build:ios:all')(buildCreator(mobileGlobs, 'tokens.json'))
);
