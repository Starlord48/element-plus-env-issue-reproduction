# Vue 3 + Vite + Element Plus + Vitest (Browser Mode)

This guide will help you set up and run tests for this project, including browser-based tests using Playwright and Chromium.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Reproduction Steps

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Install Playwright and Chromium:**
   ```sh
   npm install --save-dev playwright
   npx playwright install chromium
   ```

3. **Run all tests in headless browser mode (recommended for full coverage):**
    ```sh
    npm run test:browser
    ```
    - This will run Vitest in browser mode using Playwright's headless Chromium.
    - Test reports will be generated as configured in the project.
    - And you can find the error process is undefined from "/packages/components/tooltip/src/content.vue:94:2".


Reference error log:

