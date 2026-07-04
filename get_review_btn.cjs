const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://maps.app.goo.gl/aM8VSdCMAbRxM6Yv5');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {});
  
  const html = await page.content();
  const match = html.match(/ChIJ[A-Za-z0-9_-]{20,}/g);
  if (match) {
      console.log('ChIJ:', [...new Set(match)]);
  }

  const aTags = await page.$$eval('a', as => as.map(a => a.href));
  const reviewLink = aTags.find(h => h.includes('writereview') || h.includes(',3,') || h.includes('review'));
  console.log('Found review link:', reviewLink);
  await browser.close();
})();
