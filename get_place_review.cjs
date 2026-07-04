const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Go to Maps
  await page.goto('https://maps.google.com/?cid=195519890691516309');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(()=>true);
  
  // Look for the Write a review button
  // Data-value for Write a review button usually has "Write a review"
  const html = await page.content();
  const writeReviewMatches = html.match(/href="([^"]+writereview[^"]+)"/g);
  if (writeReviewMatches) {
    console.log("Write Review Links found:", writeReviewMatches);
  } else {
    // try clicking the review button
    const reviewLinks = html.match(/ChIJ[a-zA-Z0-9_-]{20,}/g);
    if(reviewLinks) {
       console.log("ChIJs:", [...new Set(reviewLinks)]);
    } else {
       console.log("No ChIJs found.");
    }
  }

  await browser.close();
})();
