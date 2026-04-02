const https = require('https');

https.get('https://avyaniasacademy.com/contact/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const match = data.match(/<iframe[^>]*src="([^"]*google\.com\/maps\/embed[^"]*)"/);
    if(match) {
        console.log("FOUND MAP:", match[1]);
    } else {
        console.log("No map found");
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
