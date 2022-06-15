'use strict';

const esNextPaths = [
  // Source files
  'packages/**/src/**/*.js',
  'packages/**/src/**/*.ts',
  'packages/**/src/**/*.vue',
];

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'typescript',

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};