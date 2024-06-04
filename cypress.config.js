const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,

  e2e: {
    // setupNodeEvents(on, config) {

    //   return require('./cypress/plugins/index.js')(on, config)

    // },

    baseUrl: 'https://bss-uat.mtn.com.ng/dclm-web-ui/dashboard',
    experimentalSessionAndOrigin: true,
    testIsolation: true,
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "video": false,
    "modifyObstructiveCode": false,
    "projectId":"bx8xv2",
    "pageLoadTimeout": 60000,
    "compilerOptions": {
    "types": ["cypress", "cypress-real-events"]
    },

    "chromeArgs": [
      "--disable-extensions",
      "--disable-background-networking",
      "--disable-sync",
      "--disable-translate",
      "--disable-popup-blocking",
      "--disable-default-apps",
      "--mute-audio",
      "--no-first-run",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--start-maximized",
      "--disable-software-rasterizer"
    ],

  },
  "defaultCommandTimeout": 60000,
  "pageLoadTimeout": 90000,
  "watchForFileChanges": false
});
