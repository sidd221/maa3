const https = require('https');

https.get('https://www.google.com/search?q=Maa+Homeo+Clinic+-+Dr.+Pradip+Kumar+Patna+Reviews&hl=en', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for data-pid="ChIJ..."
    const match = data.match(/data-pid="([^"]+)"/);
    if (match) {
      console.log('Found PID:', match[1]);
    } else {
      console.log('No PID found in search HTML.');
      // Look for any ChIJ
      const allChij = data.match(/ChIJ[a-zA-Z0-9_-]+/g);
      if (allChij) console.log('Possible ChIJs:', [...new Set(allChij)]);
    }
  });
}).on('error', console.error);
