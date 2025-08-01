import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // test: {
  //   environment: 'jsdom',
  //   globals: true,
  //   browser: {
  //     enabled: true, // Enable browser mode
  //     instances: [
  //       { name: 'chromium', browser: 'chromium', headless: true }
  //     ]
  //   },
  //   ui: true // Enable Vitest UI (browser)
  // }
  test: {
    globals: true,
    environment: "jsdom",
    mockReset: true,
    watch: true,
    // environment: 'jsdom', // NO I18N
    // pool: 'vmForks', // NO I18N
    inspect: true,
    fileParallelism: false,
    browser: {
      provider: "playwright", // webdriverio/playwright // NO I18N
      enabled: true,
      instances: [
        {
          browser: "chromium",
          launchOptions: {
            headless: true,
            devtools: false
          },
          contextOptions: {
            viewport: { width: 1000, height: 600 }
          }
        }
      ],

    },
    exclude: [
      "**/node_modules/**", // Exclude the entire node_modules folder
      "node_modules/**" // Exclude the entire node_modules folder
    ],
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    include: ["**/*.test.js", "**/*.test.jsx"],
    setupFiles: ["vitest.setup.js"],
    testTimeout: 30000,
    deps: {
      web: {
        transformAssets: true,
        transformCss: true
      },
      optimizer: {
        web: {
          enabled: true
        }
      }
    },
    reporters: ["json", "html"], // NO I18N
    outputFile: {
      json: "test_reports/report.json", // NO I18N
      html: "test_reports/index.html" // NO I18N
    }
  }
})
