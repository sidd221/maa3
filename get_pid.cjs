const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://maps.app.goo.gl/aM8VSdCMAbRxM6Yv5');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(()=>true);
  
  const content = await page.content();
  
  // Looking for place id string (starts with ChIJ)
  const placeIdMatch = content.match(/ChIJ[a-zA-Z0-9_-]{20,}/g);
  if (placeIdMatch) {
     console.log("Place IDs found:", [...new Set(placeIdMatch)]);
  } else {
     console.log("No place ID found.");
  }

  await browser.close();
})();
