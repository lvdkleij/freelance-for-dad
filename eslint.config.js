import eslintPluginAstro from "eslint-plugin-astro";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  eslintConfigPrettier,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      "eslint-plugin-prettier": eslintPluginPrettier,
    },
    ignores: [],
  },
];
