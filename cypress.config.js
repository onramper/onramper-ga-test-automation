const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "r2jfku",
    reporter: 'cypress-mochawesome-reporter',
    baseUrl:`https://widget.onramper.dev`,
    defaultCommandTimeout:5000,
    pageLoadTimeout:100000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
