// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const _ = require('lodash');
const xml = require('xml');
var fs = require('fs');

function loadDiscardedCategories() {
  return fs.readFileSync(
    'node_modules/theo/lib/formats/blu.android.discarded.categories.json',
    'utf8'
  );
}

module.exports = (def) => {
  const discardedCategories = loadDiscardedCategories();

  const o = {
    resources: def
      .get('props')
      .filter((prop) => {
        return !discardedCategories.includes(prop.get('category'));
      })
      .map((prop) => {
        const key = (() => {
          const newLocal = prop.get('type');
          switch (newLocal) {
            case 'color':
              return 'color';
            case 'size':
              return 'dimen';
            case 'number':
              return 'integer';
            case 'string':
              return 'string';
            default:
              return 'dimen';
          }
        })();

        return {
          [key]: [
            {
              _attr: {
                name: _.toLower(`ocean_${prop.get('name')}`).replace(/[-]/g, '_'),
                category: prop.get('category'),
              },
            },
            prop.get('value'),
          ],
        };
      })
      .toJS(),
  };
  return xml(o, {
    indent: '  ',
    declaration: true,
  });
};
