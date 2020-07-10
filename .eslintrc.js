module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['import', 'prettier', 'standard'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'space-before-function-paren': 0,
    'new-cap': 0,
    'prettier/prettier': 2,
  },
};
