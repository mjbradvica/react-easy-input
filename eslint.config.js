import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import sonar from "eslint-plugin-sonarjs";
import compat from "eslint-plugin-compat";
import prettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/*.{ts,tsx}", "tests/*.{ts,tsx}"],
    ignores: ["tests/setup-tests.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  sonar.configs.recommended,
  unicorn.configs.recommended,
  compat.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            i: true,
          },
        },
      ],
    },
  },
]);
