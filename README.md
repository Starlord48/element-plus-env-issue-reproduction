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

renders and hides Element Plus el-tooltip content (coverage for content.vue:94)
ReferenceError: process is not defined
 - /packages/components/tooltip/src/content.vue:94:2
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:391:27
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:1648:4
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:1493:28
 - /packages/components/tooltip/src/content.vue:107:9
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:391:27
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:1648:4
 - /node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js:1493:28
 - /node_modules/.vite/vitest/da39a3ee5e6b4b0d3255bfef95601890afd80709/deps/element-plus.js?v=64a3e8c4:19519:15
 - /node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:692:12