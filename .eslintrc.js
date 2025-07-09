module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest', 'prettier', 'import'],
  rules: {
    'import/no-default-export': 1,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'no-shadow': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true }],
    'prettier/prettier': 0,
    'react/prop-types': 0,
    'react/jsx-boolean-value': ['error', 'always'],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/function-component-definition': [
      2,
      { unnamedComponents: 'arrow-function', namedComponents: 'arrow-function' },
    ],
  },
  env: {
    'jest/globals': true,
    browser: true,
  },
  overrides: [
    {
      files: ['src/**/*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'dot-notation': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.json', '.eslintrc.js'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        'no-unused-expressions': 'off',
        '@nx/enforce-module-boundaries': 'off',
      },
    },
  ],
};
