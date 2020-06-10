function theoReplaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

module.exports = (theo) => {
  theo.registerValueTransform(
    'android-font-size-sp',
    (prop) =>
      prop.get('type') === 'size' && prop.get('category') === 'font-size',
    (prop) => {
      return theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'sp';
    },
  );

  theo.registerValueTransform(
    'android-border-width-dp',
    (prop) =>
      prop.get('type') === 'unit' && prop.get('category') === 'border-width',
    (prop) => {
      return theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'dp';
    },
  );

  theo.registerValueTransform(
    'android-radius-dp',
    (prop) => prop.get('type') === 'unit' && prop.get('category') === 'radius',
    (prop) => {
      return theoReplaceAll(`${prop.get('value')}`, 'px', '') + 'dp';
    },
  );

  theo.registerTransform('android', [
    'android-font-size-sp',
    'android-border-width-dp',
    'android-radius-dp',
  ]);
};
