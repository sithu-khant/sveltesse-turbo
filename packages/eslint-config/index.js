import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const config = defineConfig(
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.mjs']
  },

  ...tseslint.configs.recommended,

  {
    ignores: ['.turbo', '**/.svelte-doctor', '**/.svelte-kit', '**/.wrangler', '**/worker-configuration.d.ts']
  },

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic
    }
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },

  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended']
  },

  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended']
  },

  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },

  stylistic.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    commaDangle: 'never'
  }),

  {
    rules: {
      'no-debugger': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'off',
        { argsIgnorePattern: '^_' }
      ]
    }
  }
);
