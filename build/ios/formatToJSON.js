/* eslint-disable eqeqeq */
const Immutable = require('immutable');
const _ = require('lodash');

module.exports = (def) => {
  const content = def
    .get('props')
    .map((prop) => {
      let result = Immutable.List();
      const k = _.camelCase(prop.get('name'));
      let v = prop.get('value');

      var fontSearch = k.search('fontFamily');
      if (fontSearch > -1) {
        v = v.replace(/\s/g, '');
      }

      var n = v.search('%');
      if (n > -1) {
        v = v.replace('%', '');
        if (isNaN(v) == false) v = v / 100;
      }

      if (isNaN(v)) v = JSON.stringify(v);

      var isFontWeight = k.search('fontWeight');
      var isFontFamily = k.search('fontFamily');
      if (isFontWeight == -1 && isFontFamily == -1) {
        result = result.push(`  "${k}": ${v},`);
      }
      if (prop.get('category') == 'font-family') {
        const weightKeys = [
          'WeightLight',
          'WeightRegular',
          'WeightMedium',
          'WeightBold',
          'WeightExtraBold',
        ];
        const fontFamilyBaseWeightValues = [
          'Light',
          'Regular',
          'SemiBold',
          'Bold',
          'ExtraBold',
        ];
        const fontFamilyHighlightWeightValues = [
          'Light',
          'Roman',
          'Medium',
          'Heavy',
          'Black',
        ];
        for (var i = weightKeys.length - 1; i >= 0; i--) {
          const keyWeight = k + weightKeys[i];

          if (k == 'fontFamilyBase') {
            const fontFamilyWithWeight =
              prop.get('value').replace(/\s/g, '') +
              '-' +
              fontFamilyBaseWeightValues[i];
            result = result.push(
              `  "${keyWeight}": "${fontFamilyWithWeight}",`
            );
          } else {
            const fontFamilyWithWeight =
              prop.get('value').replace(/\s/g, '') +
              '-' +
              fontFamilyHighlightWeightValues[i];
            result = result.push(
              `  "${keyWeight}": "${fontFamilyWithWeight}",`
            );
          }
        }
      }

      return result;
    })
    .flatten(1)
    .toArray()
    .join('\n');
  return ['{', content, '}'].join('\n');
};
