module.exports = (str, find, replace) =>
  str.replace(new RegExp(find, 'g'), replace);
