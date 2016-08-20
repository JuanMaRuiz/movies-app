exports.config = {
  // framework: 'jasmine',
  seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
  /* If specified browserstackUser and browserstackKey, the settings for seleniumServerJar, seleniumPort, eleniumArgs, sauceUser and sauceKey will be ignored */
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
      'browserName': 'chrome'
    },
    // {
    //   'browserName': 'safari'
    // },
    {
      'browserName': 'phantomjs',

      /* 
       * Can be used to specify the phantomjs binary path.
       * This can generally be ommitted if you installed phantomjs globally.
       */
      'phantomjs.binary.path': require('phantomjs').path,

      /*
       * Command line args to pass to ghostdriver, phantomjs's browser driver.
       * See https://github.com/detro/ghostdriver#faq
       */
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }],
  suites: {
    login: './specs/login/**/*Spec.js',
    movieList: './specs/moviesList/**/*Spec.js'
  }
}
