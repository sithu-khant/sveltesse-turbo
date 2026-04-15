import js from '@eslint/js';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
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
    ignores: ['**/.turbo', '**/.svelte-doctor', '**/.svelte-kit', '**/.wrangler', '**/worker-configuration.d.ts']
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
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },

  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    plugins: {
      jsonc: eslintPluginJsonc
    },
    language: 'jsonc/x',
    rules: {
      'jsonc/indent': ['warn', 2]
    }
  },

  stylistic.configs.recommended,
  stylistic.configs.customize({
    severity: 'warn',
    semi: true,
    commaDangle: 'never'
  }),

  {
    rules: {
      'no-debugger': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ]
    }
  }
);
