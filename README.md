# poc-gh-actions

![CI](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml/badge.svg)
![Tests](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml/badge.svg?label=tests)
[![codecov](https://codecov.io/gh/miguelpadin/poc-gh-actions/branch/main/graph/badge.svg)](https://codecov.io/gh/miguelpadin/poc-gh-actions)
![Node](https://img.shields.io/badge/node-20.x-green)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)
![eslint](https://img.shields.io/badge/lint-eslint-blueviolet)
![husky](https://img.shields.io/badge/hooks-husky-7D3EA5)
![GitHub last commit](https://img.shields.io/github/last-commit/miguelpadin/poc-gh-actions)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/miguelpadin/poc-gh-actions)

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

## 📁 Project Structure

poc-gh-actions/
├── .github/workflows/ci.yml # CI pipeline
├── .husky/ # Git hooks
├── .lintstagedrc.json # lint-staged setup
├── src/ # Vue app source code
│ ├── components/
│ ├── utils/
│ │ └── tests/ # Vitest test files
│ └── main.ts
├── vitest.config.ts # Vitest config + coverage
├── vite.config.ts # Vite setup
├── package.json
└── README.md

---

## 🧪 Testing & Coverage

### Run all tests

```bash
npm test
Generate coverage locally
npm run coverage


Coverage is produced in:

coverage/
 ├── index.html
 ├── clover.xml
 └── ...


GitHub Actions uploads this report to Codecov on each push.

🧹 Code Quality
Format (Prettier)
npm run format
npm run format:check

Lint (ESLint)
npm run lint
npm run lint:ci
npm run lint:fix

🪝 Git Hooks (Husky v9)
Pre-commit

Runs:

Prettier (check only)

ESLint (no warnings allowed)

Vitest tests

Pre-push

Runs:

Vitest tests with full coverage

To bypass hooks intentionally:

git commit --no-verify
git push --no-verify

🚀 CI Pipeline

The CI workflow (ci.yml) performs:

Checkout

Use Node 20

npm ci

Prettier check

ESLint (no warnings allowed)

TypeScript typecheck

Vitest tests

Coverage report upload to Codecov

If any step fails, the entire job fails.

📦 Requirements

Node 20.x

npm 10+

macOS/Linux/WSL recommended

📄 License

MIT License.
Free to use, modify, and distribute.

💬 Notes

This project is intentionally minimal and exists primarily to test:

commit rewriting with historical dates

advanced GitHub Actions patterns

code quality automation

integration of external tools like Codecov
```
