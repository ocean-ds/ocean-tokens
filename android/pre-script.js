const fs = require('fs');

const source = 'android/blu.android.xml.js';
const target = 'node_modules/theo/lib/formats/blu.android.xml.js';

fs.copyFile(source, target, (err) => {
  if (err) throw err;
  console.log(`${source} was copied to ${target}`);
});
