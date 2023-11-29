module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    es2024: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:mdx/recommended",
    "next",
    "next/core-web-vitals",
  ],
  plugins: ["@typescript-eslint", "sonarjs", "jsx-expressions"],
  rules: {
    // Disable prop-types as we use TypeScript for type checking
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
    "jsx-expressions/strict-logical-expressions": "error",
    "react-hooks/exhaustive-deps": "error",
    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-no-target-blank": 0,
    "react/prop-types": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    // Allows for the use of imports
    project: "./tsconfig.json",
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
  },
};
