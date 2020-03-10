'use strict';

const puppeteer = require('puppeteer');
var argv = require('minimist')(process.argv.slice(2));

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', request => {
      console.log(request.url());
      request.continue();
  });
  await page.goto(argv.url);
  

  await browser.close();
})();

