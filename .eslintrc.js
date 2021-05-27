module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'typeorm', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error']
  }
}
