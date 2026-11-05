const _ = require('lodash');
const xml = require('xml');

const discardedCategories = [
  'font-weight',
  'font-family',
  'box-shadow',
  'radius',
];

module.exports = (def) => {
  const o = {
    resources: def
      .get('props')
      .filter(
        (prop) =>
          !discardedCategories.includes(prop.get('category')) ||
          prop.get('export-mobile') === true
      )
      .map((prop) => {
        const name = _.toLower(`ocean_${prop.get('name')}`).replace(
          /[-]/g,
          '_'
        );

        if (
          prop.get('type') === 'float' ||
          ['opacity', 'letter-spacing'].includes(prop.get('category'))
        ) {
          return {
            item: [
              {
                _attr: {
                  name,
                  type: 'dimen',
                  format: 'float',
                  category: prop.get('category'),
                },
              },
              prop.get('value'),
            ],
          };
        }

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
                name,
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
