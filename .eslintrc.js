module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['import', 'standard'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'space-before-function-paren': 0,
    'new-cap': 0,
  },
};
