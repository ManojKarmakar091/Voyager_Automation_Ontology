var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  specs: [
    'testsuites/Ontology_AnimalTypeSuggest&Search.js',
    'testsuites/Ontology_NameIndivdualsSuggest&Search.js',
    'testsuites/Ontology_ClassSuggest&Search.js'
    
],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--headless"]
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'reports/allure-reports'
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return Buffer.from(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }

};