import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  // =========================
  // IGNORE
  // =========================
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  // =========================
  // SOURCE FILES
  // =========================
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // ⚠️ NÃO use project aqui (evita erro de parsing)
      },
      globals: {
        ...globals.browser,
      },
    },

    // 🔴 PLUGINS DEVEM ESTAR AQUI
    plugins: {
      '@typescript-eslint': tsPlugin,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      prettier,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.base.json',
        },
      },
    },

    rules: {
      // =========================
      // BASE
      // =========================
      ...js.configs.recommended.rules,

      // =========================
      // TYPESCRIPT
      // =========================
      ...tsPlugin.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',

      // =========================
      // REACT
      // =========================
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      'react/prop-types': 'off',

      // =========================
      // IMPORT ORDER
      // =========================
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'import/no-unresolved': 'off',

      // =========================
      // PRETTIER
      // =========================
      'prettier/prettier': 'error',
    },
  },
];
