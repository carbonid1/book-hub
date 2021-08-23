module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
    'next',
  ],
  plugins: ['react'],
  ignorePatterns: ['pages/api/nexus-typegen.ts'],
  rules: {
    'array-element-newline': ['error', 'consistent'],
    quotes: ['warn', 'single'],
    'jsx-quotes': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
