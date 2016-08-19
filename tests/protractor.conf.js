exports.config = {
  // framework: 'jasmine',
  seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
  /* If specified browserstackUser and browserstackKey, the settings for seleniumServerJar, seleniumPort, eleniumArgs, sauceUser and sauceKey will be ignored */
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  suites: {
    login: './login/**/*Spec.js',
    // search: ['tests/e2e/contact_search/**/*Spec.js',
    //   'tests/e2e/venue_search/**/*Spec.js']
  }
}
