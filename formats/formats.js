module.exports = (theo) => {
  theo.registerValueTransform(
    'webpx',
    (prop) => prop.get('type') === 'size',
    (prop) => prop.get('value') + 'px'
  );
  theo.registerTransform('web', ['webpx']);
};
