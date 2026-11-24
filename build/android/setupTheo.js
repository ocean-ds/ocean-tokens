const formatToXML = require('./formatToXML');
const theoReplaceAll = require('../utils/theoReplaceAll');

module.exports = (theo) => {
  theo.registerValueTransform(
    'android-letter-spacing-em',
    (prop) => prop.get('category') === 'letter-spacing',
    (prop) => `${prop.get('value')}`.replace(/em$/, '')
  );

  theo.registerValueTransform(
    'android-font-size-sp',
    (prop) =>
      prop.get('type') === 'size' && prop.get('category') === 'font-size',
    (prop) => {
      const replacedValue = theoReplaceAll(`${prop.get('value')}`, 'px', '');
      return `${replacedValue}sp`;
    }
  );

  theo.registerValueTransform(
    'android-border-width-dp',
    (prop) =>
      prop.get('type') === 'unit' && prop.get('category') === 'border-width',
    (prop) => {
      const replacedValue = theoReplaceAll(`${prop.get('value')}`, 'px', '');
      return `${replacedValue}dp`;
    }
  );

  theo.registerValueTransform(
    'android-spacing-dp',
    (prop) => prop.get('type') === 'unit' && prop.get('category') === 'spacing',
    (prop) => {
      const replacedValue = theoReplaceAll(`${prop.get('value')}`, 'px', '');
      return `${replacedValue}dp`;
    }
  );

  theo.registerValueTransform(
    'android-radius-dp',
    (prop) => prop.get('type') === 'unit' && prop.get('category') === 'radius',
    (prop) => {
      const replacedValue = theoReplaceAll(`${prop.get('value')}`, 'px', '');
      return `${replacedValue}dp`;
    }
  );

  theo.registerValueTransform(
    'android-shadow-dp',
    (prop) => prop.get('category') === 'box-shadow',
    (prop) => {
      const parts = prop.get('value').replace(/px/g, 'dp').split(' ');
      const offsetY = prop.get('android-shadow-offset-y');
      if (offsetY !== undefined) {
        parts[1] = `${offsetY}dp`;
      }
      return parts.join(' ');
    }
  );

  theo.registerTransform('android', [
    'android-letter-spacing-em',
    'android-font-size-sp',
    'android-border-width-dp',
    'android-spacing-dp',
    'android-radius-dp',
    'shadow-rgba',
    'android-shadow-dp',
  ]);

  theo.registerFormat('xml', formatToXML);
};
