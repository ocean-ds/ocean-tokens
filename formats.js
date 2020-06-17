module.exports = (theo) => {
  theo.registerValueTransform(
    'rgbtohexios',
    (prop) => prop.get('type') === 'size',
    (prop) => prop.get('value') + '',
    (prop) => prop.get('color') + 'hexa'
  );
  theo.registerTransform('ios', ['rgbtohexios']);
};

module.exports = (theo) => {
  theo.registerValueTransform(
    'webpx',
    (prop) => prop.get('type') === 'size',
    (prop) => prop.get('value') + 'px'
  );
  theo.registerTransform('web', ['webpx']);
};
