module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'no-new': 0,
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    'max-len': ['error', { code: 120 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-destructuring': ['error', {
      array: false,
      object: true
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
};