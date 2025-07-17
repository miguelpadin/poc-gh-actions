// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
// Desactiva reglas que chocan con Prettier
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Ignorados (sustituye .eslintignore)
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },

  // Archivos .vue con parser de Vue y TS interno
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // Archivos TS/JS
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs["flat/strongly-recommended"],

  // Ajustes finos del proyecto
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
    },
  },

  // ¡Muy importante! Colocar al FINAL
  eslintConfigPrettier,
];
