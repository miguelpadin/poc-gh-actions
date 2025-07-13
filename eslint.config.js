import js from "@eslint/js";
import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

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

  // Ajustes finos
  {
    rules: {
      "no-undef": "off", // TS ya gestiona tipos/defs
      "no-unused-vars": "warn", // señal útil sin romper build
    },
  },
];
