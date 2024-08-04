import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
        // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

    },
  },
  ...compat.extends('airbnb'),
  {
    rules: {
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
    },
  },
];
