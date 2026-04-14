import { config } from '@repo/eslint-config';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
  ...config,

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte']
      }
    },
    plugins: {
      svelte
    },
    rules: {
      ...svelte.configs.recommended.rules,
      'svelte/html-quotes': [
        'warn',
        {
          'prefer': 'single',
          'dynamic': {
            'quoted': true,
            'avoidInvalidUnquotedInHTML': true
          }
        }
      ],
      'svelte/indent': ['warn', {
        indent: 2,
        alignAttributesVertically: true
      }],
      'svelte/no-at-html-tags': 'off',
      'svelte/block-lang': ['error', {
        script: ['ts']
      }],
      'svelte/button-has-type': [
        'error',
        {
          'button': true,
          'submit': true,
          'reset': true
        }
      ]
    }
  }
];
