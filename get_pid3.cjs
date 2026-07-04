const https = require('https');

const options = {
  hostname: 'www.google.com',
  path: '/search?q=Maa+Homeo+Clinic+-+Dr.+Pradip+Kumar+Patna&hl=en',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const allChij = data.match(/ChIJ[a-zA-Z0-9_-]{20,}/g);
    if (allChij) console.log('Possible ChIJs:', [...new Set(allChij)]);
    else console.log('None found');
  });
}).on('error', console.error);
