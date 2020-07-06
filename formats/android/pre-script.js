const fs = require('fs');

const source = 'formats/android/blu.android.xml.js';
const target = 'node_modules/theo/lib/formats/blu.android.xml.js';

const discardedSource = 'formats/android/blu.android.discarded.categories.json';
const discardedTarget =
  'node_modules/theo/lib/formats/blu.android.discarded.categories.json';

function copyFiles() {
  function copyDiscardCategoriesConfig() {
    fs.copyFile(discardedSource, discardedTarget, (err) => {
      if (err) throw err;
      console.log(`${discardedSource} was copied to ${discardedTarget}`);
    });
  }

  function copyCustomFormat() {
    fs.copyFile(source, target, (err) => {
      if (err) throw err;
      console.log(`${source} was copied to ${target}`);
    });
  }

  copyCustomFormat();
  copyDiscardCategoriesConfig();
}

copyFiles();
