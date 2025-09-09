// eslint.config.js
import { defineConfig } from "eslint/config";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.ts"], // Apply to TypeScript files
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig.json
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsEslint,
      import: eslintPluginImport,
    },
    rules: {
      // Add your TypeScript-specific rules here
      ...tsEslint.configs["eslint-recommended"].rules, // Recommended ESLint rules
      ...tsEslint.configs.recommended.rules, // Recommended TypeScript-ESLint rules
      "no-unused-vars": "off", // Disable base rule
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Use TS-aware unused vars rule
    },
  },
  eslintConfigPrettier, // Integrates with Prettier
]);
