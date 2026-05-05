const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  allowCypressEnv: true,

  e2e: {
    baseUrl:"https://kewi.ps/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
