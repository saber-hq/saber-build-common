# `@saber-hq/eslint-config-react`

Saber React ESLint config.

## Installation

### With Plug-n-Play (PNP)

ESLint has issues with PNP. First, install the following:

```bash
yarn add -D eslint eslint-import-resolver-node eslint-plugin-import @rushstack/eslint-patch
```

Then, in your `.eslintrc.js`, add:

```js
"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@saberhq/eslint-config-react"],
  parserOptions: {
    project: "tsconfig.json",
  },
};
```
