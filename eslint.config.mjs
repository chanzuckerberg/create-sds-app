import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import * as mdx from "eslint-plugin-mdx";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import sonarjs from "eslint-plugin-sonarjs";

export default defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".yarn/**",
  ]),

  js.configs.recommended,

  // Next.js, React, React Hooks, import and jsx-a11y rules, plus the
  // typescript-eslint recommended set.
  ...nextCoreWebVitals,
  ...nextTypeScript,

  sonarjs.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    // Several sonarjs rules (e.g. jsx-no-leaked-render) are type-aware and
    // need a TS program to avoid false positives.
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      // (thuang): Allow args prefixed with `_`
      // example: https://eslint.org/docs/rules/no-unused-vars#argsignorepattern
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: false,
          vars: "all",
        },
      ],
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-no-target-blank": "off",
      // TypeScript already covers prop types.
      "react/prop-types": "off",
    },
  },

  {
    ...mdx.flat,
    files: ["**/*.{md,mdx}"],
  },

  // Must stay last so Prettier wins over other formatting rules.
  prettierRecommended,
]);
