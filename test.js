var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
 'browserName' : 'iPhone',
 'device' : 'iPhone 7',
 'realMobile' : 'true',
 'os_version' : '10.3',
 'browserstack.user' : 'mushtaqsayyed1',
 'browserstack.key' : 'NC6Df9KsTAxJAmJArf7C'
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
     });
  });
});
