const gulp = require('gulp');
const through = require('through2');
const Vinyl = require('vinyl');
const $ = require('gulp-load-plugins')();

module.exports = (globs) =>
  gulp
    .src(globs)
    .pipe($.util.buffer())
    .pipe(
      through.obj((files, _enc, next) => {
        const filepaths = files.map((file) => file.path).sort();
        const tokenImports = filepaths.reduce(
          (prev, filepath) => `${prev}\n- ${filepath}`,
          'imports:'
        );
        const file = new Vinyl({
          path: 'custom-tokens.yml',
          contents: Buffer.from(tokenImports),
        });

        next(null, file);
      })
    );
