const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:`https://widget.onramper.dev`,
    defaultCommandTimeout:5000,
    pageLoadTimeout:100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
