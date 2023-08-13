import type { TSESLint } from "@typescript-eslint/utils/dist";

const config: TSESLint.Linter.Config = {
  env: {
    browser: true,
  },
  extends: [
    "@saberhq",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: { react: { version: "detect" } },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
  },
};

module.exports = config;
