module.exports = (theo) => {
  theo.registerValueTransform(
    'shadow-rgba',
    (prop) => prop.get('category') === 'box-shadow',
    (prop) =>
      prop.get('value').replace(/rgba\(#([0-9a-f]{6}),/i, (_, hex) => {
        const channels = hex
          .match(/../g)
          .map((channel) => parseInt(channel, 16));
        return `rgba(${channels.join(', ')},`;
      })
  );
};
