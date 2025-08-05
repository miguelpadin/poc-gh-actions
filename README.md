# poc-gh-actions

![Node](https://img.shields.io/badge/node-20.x-green)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)
![eslint](https://img.shields.io/badge/lint-eslint-blueviolet)
![husky](https://img.shields.io/badge/hooks-husky-7D3EA5)
![GitHub last commit](https://img.shields.io/github/last-commit/miguelpadin/poc-gh-actions)
![CI](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/miguelpadin/poc-gh-actions/branch/main/graph/badge.svg)](https://codecov.io/gh/miguelpadin/poc-gh-actions)

A minimal Vue 3 + Vite project built specifically to explore and test GitHub Actions workflows (CI, tests, coverage, and automation).  
The repository is intentionally simple to keep the focus on the DevOps pipeline, tooling, and quality controls.

---

## ✅ Features

- **Vue 3 + Vite 7** development environment
- **Vitest 4** unit testing with **V8 coverage**
- **Codecov** integration (Clover reporter)
- **GitHub Actions CI** running:
  - Node 20
  - install → format → lint → typecheck → tests → coverage upload
- **Prettier** for consistent code formatting
- **ESLint** with Vue, TypeScript, and strict rules
- **Husky (v9)** Git hooks:
  - `pre-commit`: format check + ESLint check + Vitest tests
  - `pre-push`: ensures tests always pass before pushing
- **lint-staged**: only formats and lints changed files
- **100% deterministic builds** via `npm ci`

---

## 📄 License

MIT License.
Free to use, modify, and distribute.
