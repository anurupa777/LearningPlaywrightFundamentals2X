# Learning Playwright Fundamentals 2X

This repository contains a basic Playwright test project using TypeScript.

## Setup

Install dependencies:

```powershell
npm install
```

If PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd install
```

## Run Tests

Run all tests:

```powershell
npm.cmd run test
```

Run tests in headed mode:

```powershell
npm.cmd run test:headed
```

Open Playwright UI mode:

```powershell
npm.cmd run test:ui
```

Show the HTML report:

```powershell
npm.cmd run report
```

## Project Structure

- `playwright.config.ts` - Playwright configuration.
- `tests/` - Playwright test specs.
- `package.json` - Project scripts and dependencies.

Generated folders such as `node_modules`, `test-results`, and `playwright-report` are ignored by Git.
