import js from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".husky/**",
      "node_modules/**",
      "bin/**",
      "cache/**",
      "coverage/**",
      "build/**",
    ],
  },
  eslintConfigPrettier,
]
