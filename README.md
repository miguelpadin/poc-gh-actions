# poc-gh-actions

![CI](https://github.com/miguelpadin/poc-gh-actions/actions/workflows/ci.yml/badge.svg?branch=main)
[![codecov](https://codecov.io/gh/miguelpadin/poc-gh-actions/branch/main/graphs/badge.svg)](https://codecov.io/gh/miguelpadin/poc-gh-actions)

A minimal Vue 3 + Vite project built specifically to explore and test GitHub Actions workflows (CI, tests, coverage, and automation).  
The repository is intentionally simple to keep the focus on the DevOps pipeline, tooling, and quality controls.

---

## ✅ Features

- **Vue 3 + Vite 7** development environment
- **TypeScript** using the recommended Vue configuration
- **Vitest 4** unit testing with **V8 coverage** (HTML + Clover)
- **Playwright** end-to-end testing (CI headless + local headed mode)
- **ESLint** with Vue, TypeScript, and strict rules
- **Prettier** for consistent formatting (local + CI check)
- **Husky (v9)** Git hooks:
  - **pre-commit**: Prettier check, ESLint check, and Vitest non-interactive tests
  - **pre-push**: Playwright E2E tests before pushing
- **TypeScript type checking** via `tsc --noEmit`
- **GitHub Actions CI** running:
  - Node 20
  - install → format → lint → typecheck → unit tests → coverage upload → E2E tests
- **Codecov** integration (Clover reporter)
- **Deterministic installs** via `npm ci`

---

## ⚙️ Scripts

```bash
npm run dev             # Start Vite dev server
npm run build           # Build the application (vue-tsc + vite build)
npm run preview         # Preview the production build

npm run format:fix      # Apply Prettier formatting
npm run format:ci       # Prettier check (used in CI and pre-commit)

npm run lint:fix        # ESLint with autofix
npm run lint:ci         # ESLint strict mode (no warnings allowed)

npm run typecheck       # TypeScript type checking (tsc --noEmit)

npm run test:run        # Unit tests (Vitest) in non-interactive mode
npm run test:watch      # Unit tests in watch mode
npm run test:coverage   # Unit tests with coverage (V8, HTML + clover)

npm run test:e2e        # Playwright end-to-end tests (headless, CI-safe)
npm run test:e2e:headed # Playwright in headed mode for debugging

npm run preview:test    # Preview the built app for E2E tests (auto-builds before serving)
```

---

## 📄 License

MIT License.
Free to use, modify, and distribute.
