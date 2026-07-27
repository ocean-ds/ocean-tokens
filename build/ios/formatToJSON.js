/* eslint-disable */
const Immutable = require('immutable');
const _ = require('lodash');

module.exports = (def) => {
  const content = def
    .get('props')
    .map((prop) => {
      let result = Immutable.List();
      const k = _.camelCase(prop.get('name'));
      let v = prop.get('value');

      const fontSearch = k.search('fontFamily');
      if (fontSearch > -1) {
        v = v.replace(/\s/g, '');
      }

      const n = v.search('%');
      if (n > -1) {
        v = v.replace('%', '');
        if (Number.isNaN(v) == false) v /= 100;
      }

      if (isNaN(v)) v = JSON.stringify(v);

      const isFontWeight = k.search('fontWeight');
      const isFontFamily = k.search('fontFamily');
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
        // A família Highlight deixou de ser Avenir e passou a ser Nunito Sans, então os
        // sufixos de peso precisam seguir a nomenclatura do Nunito Sans — os antigos
        // (Roman/Heavy/Black) são nomes de Avenir e gerariam arquivos inexistentes.
        // Os dois arrays estão idênticos de propósito: as duas famílias apontam para a
        // mesma fonte hoje. Colapsar ou depreciar os tokens Highlight é decisão separada.
        const fontFamilyHighlightWeightValues = [
          'Light',
          'Regular',
          'SemiBold',
          'Bold',
          'ExtraBold',
        ];
        for (let i = weightKeys.length - 1; i >= 0; i -= 1) {
          const keyWeight = k + weightKeys[i];
          const baseValue = prop.get('value').replace(/\s/g, '');

          if (k == 'fontFamilyBase') {
            const fontFamilyWithWeight = `${baseValue}-${fontFamilyBaseWeightValues[i]}`;
            result = result.push(
              `  "${keyWeight}": "${fontFamilyWithWeight}",`
            );
          } else {
            const fontFamilyWithWeight = `${baseValue}-${fontFamilyHighlightWeightValues[i]}`;
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
