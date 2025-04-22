const {secret} = require ('./secrets.js');

// Data sent from the client to the server
const body = 'grant_type=client_credentials&client_id=' + secret.client_id + '&client_secret=' + secret.client_secret;


  async function main() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body
    });
    const data = await response.json();
    console.log(data);
    // returns something like:
    // { title: 'foo', body: 'bar', userId: 1, id: 101 }
  }
  
  main().catch(console.error);
  

// curl command from spotify for reference
/*
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
*/