const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './TestingSuite/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://example.com',
      show: true,
      windowSize: '1200x900',
      waitForAction: 2888
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeceptJS'
}