import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [// Ignora arquivos desnecessários
{
  ignores: ["dist", "build", "node_modules"],
}, // Configuração base JS + TS + React
{
  files: ["src/**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    globals: {
				...globals.browser,
				...globals.jest,
		},
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  plugins: {
    "@typescript-eslint": ts,
    react,
    "react-hooks": reactHooks,
    "jsx-a11y": jsxA11y,
    import: importPlugin,
    prettier,
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    // ------------------------
    // REGRAS JAVASCRIPT BASE
    // ------------------------
    ...js.configs.recommended.rules,

    // ------------------------
    // TYPESCRIPT
    // ------------------------
    ...ts.configs.recommended.rules,

    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-imports": "error",

    // ------------------------
    // REACT
    // ------------------------
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,

    "react/prop-types": "off", // Não usamos prop-types com TS
    "react/self-closing-comp": "error", // Preferir <Component /> sem children se vazio
    "react/jsx-no-leaked-render": "warn",

    // ------------------------
    // REACT HOOKS
    // ------------------------
    ...reactHooks.configs.recommended.rules,

    // ------------------------
    // ACESSIBILIDADE (boa prática geral da comunidade)
    // ------------------------
    ...jsxA11y.configs.recommended.rules,

    // ------------------------
    // IMPORTS E ORGANIZAÇÃO DO CÓDIGO
    // ------------------------
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "error",
    "import/no-duplicates": "error",

    // ------------------------
    // CÓDIGO LIMPO
    // ------------------------
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "no-unused-vars": "off", // substituído pelo TS
    "prefer-const": "error",
    "no-var": "error",

    // ------------------------
    // PRETTIER (último para evitar conflitos)
    // ------------------------
    "prettier/prettier": "error",
  },
}];
