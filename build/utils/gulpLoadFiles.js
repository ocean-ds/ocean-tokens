const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const through = require('through2');
const Vinyl = require('vinyl');

module.exports = (globs) =>
  gulp
    .src(globs)
    .pipe(gulpUtil.buffer())
    .pipe(
      through.obj((files, _enc, next) => {
        const filepaths = files.map((file) => file.path).sort();
        const componentTokenImports = filepaths.reduce(
          (prev, filepath) => `${prev}\n- ${filepath}`,
          'imports:'
        );
        const file = new Vinyl({
          path: 'custom-tokens.yml',
          contents: Buffer.from(componentTokenImports),
        });
        next(null, file);
      })
    );
