var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
test.describe('webdriverTest', function() {
  test.it('should have logo element', function () {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get('http://www.ciceksepeti.com');
    var logoElement = driver.isElementPresent(webdriver.By.id('site-logo'));
    assert.equal(true,logoElement);
    driver.quit();
  });
});