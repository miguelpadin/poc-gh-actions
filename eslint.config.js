import js from "@eslint/js";
import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,ts,vue}"],
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs["flat/strongly-recommended"],
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
