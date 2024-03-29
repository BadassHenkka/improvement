import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 1,
  },
  video: false,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:5173',
  },
})
