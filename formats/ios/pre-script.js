const fs = require('fs');

const source = 'formats/ios/blu.ios.json.js';
const target = 'node_modules/theo/lib/formats/blu.ios.json.js';

fs.copyFile(source, target, (err) => {
  if (err) throw err;
  console.log(`${source} was copied to ${target}`);
});

fs.copyFile(source, target, (err) => {
  if (err) throw err;
  console.log(`${source} was copied to ${target}`);
});
