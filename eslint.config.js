import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

const localRules = require("./eslint-rules");

module.exports.plugins = {
  local: localRules,
};

export default [
  // =========================
  // IGNORE
  // =========================
  {
    ignores: [
      "dist",
      "build",
      "node_modules",
      "**/*.d.ts", // Avoids conflicts with TypeScript's own definition files
    ],
  },

  // =========================
  // SOURCE FILES
  // =========================
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier,
      local: {
        rules: {
          "no-obscure-function-names": require("./eslint-rules/no-obscure-function-names"),
          "no-implicit-conditionals": require("./eslint-rules/no-implicit-conditionals"),
          "no-magic-numbers": require("./eslint-rules/no-magic-numbers"),
          "no-side-effects-in-components": require("./eslint-rules/no-side-effects-in-components"),
          "no-negated-conditionals": require("./eslint-rules/no-negated-conditionals"),
          "no-nested-conditionals": require("./eslint-rules/no-nested-conditionals"),
          "no-fake-hooks": require("./eslint-rules/no-fake-hooks"),
          "react-event-naming": require("./eslint-rules/react-event-naming"),
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.base.json",
        },
        node: {
          paths: ["eslint-rules"],
        },
      },
    },

    rules: {
      // =========================
      // BASE
      // =========================
      ...js.configs.recommended.rules,
      "no-undef": "off", // Handled by TypeScript

      // =========================
      // LOCAL CUSTOM RULES
      // =========================
      "local/no-obscure-function-names": "error",
      "local/no-implicit-conditionals": "error",
      "local/no-magic-numbers": "error",
      "local/no-side-effects-in-components": "error",
      "local/no-negated-conditionals": "error",
      "local/no-nested-conditionals": "error",
      "local/no-fake-hooks": "error",
      "local/react-event-naming": "error",

      // =========================
      // JSX A11Y
      // =========================
      ...jsxA11y.configs.recommended.rules,

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // =========================
      // REACT
      // =========================
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "react/prop-types": "off",

      // =========================
      // IMPORT ORDER (100% compatible with Prettier)
      // =========================
      "no-restricted-imports": [
        // Avoid relative imports to improve code maintainability
        "error",
        {
          patterns: ["../*", "../../*", "../../../*"],
        },
      ],
      "import/order": [
        // Enforce a consistent import order
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "import/no-unresolved": "off",

      // =========================
      // PRETTIER (style single font)
      // =========================
      "prettier/prettier": "error",
    },
  },
];
