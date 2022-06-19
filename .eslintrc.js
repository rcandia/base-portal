module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': [2],
    'prettier/prettier': 2,
    'space-before-function-paren': 0,
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
