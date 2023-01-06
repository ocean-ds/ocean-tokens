module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier/prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
};
