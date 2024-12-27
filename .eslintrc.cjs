/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'off'
  },
  env: {
    es2020: true, // <- activate “es2020” globals
    browser: true,
    node: true,
    mocha: true
  }
}
