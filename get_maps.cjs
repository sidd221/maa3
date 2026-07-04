const https = require('https');
https.get('https://www.google.com/maps/search/?api=1&query=Maa+Homeo+Clinic+-+Dr.+Pradip+Kumar,+B.H.M.S.+(B.U.)', (res) => {
  if(res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    console.log('Redirect:', res.headers.location);
  } else {
    let data = '';
    res.on('data', c => data+=c);
    res.on('end', () => {
       const m = data.match(/ChIJ[a-zA-Z0-9_-]{20,}/g);
       if(m) console.log([...new Set(m)]);
       else console.log('no match');
    });
  }
});
