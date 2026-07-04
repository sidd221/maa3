const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://maps.app.goo.gl/aM8VSdCMAbRxM6Yv5');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {});
  const url = page.url();
  console.log('Final URL:', url);
  const html = await page.content();
  const match = html.match(/"(ChIJ[^"]+)"/g);
  if (match) {
    console.log('Found possible Place IDs:', [...new Set(match)].join(', '));
  }
  await browser.close();
})();
