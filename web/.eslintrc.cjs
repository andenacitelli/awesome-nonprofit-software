module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
  rules: {

    // Temporary disables
    "@typescript-eslint/ban-ts-comment": "warn",

    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/no-unescaped-entities": "off",
  },
};
