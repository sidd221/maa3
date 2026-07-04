const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', async res => {
    try {
      const url = res.url();
      if (url.includes('ChIJ')) {
         console.log('Response URL with ChIJ:', url);
      }
      const text = await res.text();
      const match = text.match(/ChIJ[A-Za-z0-9_-]{20,}/g);
      if (match) console.log('Found in response:', url, [...new Set(match)]);
    } catch(e) {}
  });

  await page.goto('https://maps.app.goo.gl/aM8VSdCMAbRxM6Yv5');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {});
  
  await browser.close();
})();
