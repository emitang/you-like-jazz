import {secret} from './secrets.js';

// Data sent from the client to the server
const body = 'grant_type=client_credentials&client_id=' + secret.client_id + '&client_secret=' + secret.client_secret;

var token

export async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Scope': 'playlist-read-private',
      'Scope': 'playlist-read-collaborative'
    },
    body: body
  });
  let data = await response.json();
  //console.log(data);
  return data;
}

getToken().catch(console.error);


// curl command from spotify for reference
/*
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
*/