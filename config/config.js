var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine',

  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: ['../VadidationTestScript/AdminLibrary.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 900000
  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'target/screenshots'
    }).getJasmine2Reporter());
 }



};
