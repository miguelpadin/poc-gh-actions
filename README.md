# poc-gh-actions

[![CI](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml)
![coverage](<https://img.shields.io/badge/coverage-local%20(vitest)-blue>)

## CI Pipeline

The GitHub Actions workflow runs the following steps, in order:

1. **Prettier formatting check** (`npm run format:check`)
2. **ESLint without warnings** (`npm run lint:ci`)
3. **Unit tests** (Vitest + Vue Test Utils + happy-dom)
4. **Coverage report** (V8) with HTML output uploaded as an artifact

> Note: The coverage badge is static (local result).  
> For dynamic coverage per commit/PR, integrate **Codecov** or **Coveralls** later.

<!-- CI trigger: minor README tweak -->
