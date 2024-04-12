# `saber-build-common`

Common build configurations across Saber projects.

This repo was extracted from [saber-hq/saber-common](https://github.com/saber-hq/saber-common) to reduce the amount of version bumps required when updating Saber.

### Common Errors

#### Module parse failed: Unexpected token

`saber-common` [targets ES2022](packages/tsconfig/tsconfig.lib.json), which is [widely supported by modern DApp browsers](https://caniuse.com/?search=es2022). Please ensure that your build pipeline supports this version of ECMAScript.

## Packages

| Package                        | Description                                 | Version                                                                                                                             |
| :----------------------------- | :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| `@saberhq/browserslist-config` | Browserslist config for frontend apps       | [![npm](https://img.shields.io/npm/v/@saberhq/browserslist-config.svg)](https://www.npmjs.com/package/@saberhq/browserslist-config) |
| `@saberhq/eslint-config`       | ESLint config for TypeScript projects       | [![npm](https://img.shields.io/npm/v/@saberhq/eslint-config.svg)](https://www.npmjs.com/package/@saberhq/eslint-config)             |
| `@saberhq/eslint-config-react` | ESLint config for React projects            | [![npm](https://img.shields.io/npm/v/@saberhq/eslint-config-react.svg)](https://www.npmjs.com/package/@saberhq/eslint-config-react) |
| `@saberhq/tsconfig`            | Saber recommended TypeScript configurations | [![npm](https://img.shields.io/npm/v/@saberhq/tsconfig.svg)](https://www.npmjs.com/package/@saberhq/tsconfig)                       |

## Release

To release a new version of `saber-build-common`, navigate to [the release action page](https://github.com/saber-hq/saber-build-common/actions/workflows/release.yml) and click "Run workflow".

There, you may specify `patch`, `minor`, or `major`.

## Join Us

We're looking for contributors! Reach out to team@saber.so or message **michaelhly** on [Keybase](https://keybase.io/) with any questions.

## License

`saber-build-common` is licensed under the Apache License, Version 2.0.
