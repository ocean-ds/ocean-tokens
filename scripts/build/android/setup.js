const fs = require('fs');
const _ = require('lodash');
const { theoReplaceAll } = require('../utils');

module.exports = (theo) => {
  theo.registerValueTransform(
    'android-font-size-sp',
    (prop) =>
      prop.get('type') === 'size' && prop.get('category') === 'font-size',
    (prop) => theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'sp'
  );

  theo.registerValueTransform(
    'android-border-width-dp',
    (prop) =>
      prop.get('type') === 'unit' && prop.get('category') === 'border-width',
    (prop) => theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'dp'
  );

  theo.registerValueTransform(
    'android-spacing-dp',
    (prop) => prop.get('type') === 'unit' && prop.get('category') === 'spacing',
    (prop) => theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'dp'
  );

  theo.registerValueTransform(
    'android-radius-dp',
    (prop) => prop.get('type') === 'unit' && prop.get('category') === 'radius',
    (prop) => theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'dp'
  );

  theo.registerTransform('android', [
    'android-font-size-sp',
    'android-border-width-dp',
    'android-spacing-dp',
    'android-radius-dp',
  ]);

  theo.registerFormat('xml', require('./formatToXML'));
};
