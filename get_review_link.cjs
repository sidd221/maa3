const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=Maa+Homeo+Clinic+-+Dr.+Pradip+Kumar+Patna');
  await page.waitForSelector('a[data-pid]');
  const links = await page.$$eval('a', as => as.map(a => a.href));
  const reviewLink = links.find(l => l.includes('writereview') || l.includes('review'));
  console.log('Review Link:', reviewLink);
  
  const html = await page.content();
  const match = html.match(/"place_id":"([^"]+)"/);
  if (match) console.log('Place ID:', match[1]);
  
  await browser.close();
})();
