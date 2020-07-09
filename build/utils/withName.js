module.exports = (name) => (fn) => {
  const f = (...args) => fn(...args);
  f.displayName = name;
  return f;
};
