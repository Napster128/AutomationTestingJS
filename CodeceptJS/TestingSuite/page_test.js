Feature('first test');

Scenario('visit something',  ({ I }) => {
  I.amOnPage('https://www.npmjs.com/package/puppeteer');
  I.see('Puppeteer');
});
