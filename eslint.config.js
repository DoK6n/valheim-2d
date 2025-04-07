// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('./eslint-config').TypedFlatConfig[]} */
export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: ['src/**/*.[jt]s'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      '@stylistic/indent': ['error', 4],
      '@stylistic/brace-style': ['error', 'allman', { allowSingleLine: true }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
];
