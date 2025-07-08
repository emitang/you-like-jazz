import {secret} from './secrets.js';
import {getToken} from './gettoken.js';

// Data sent from the client to the server
//const body = 'grant_type=client_credentials&client_id=' + secret.client_id + '&client_secret=' + secret.client_secret;


  async function getPlaylist() {
    let token = await getToken();
    console.log(token.token_type + ' ' + token.access_token)
    const response = await fetch('https://api.spotify.com/v1/users/' + secret.username + '/playlists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.token_type + ' ' + token.access_token
      },
      //body: body
    });
    const data = await response.json();
    console.log(data);
    // returns something like:
    // { title: 'foo', body: 'bar', userId: 1, id: 101 }
  }
  
  getPlaylist().catch(console.error);
  

// curl command from spotify for reference
/*
curl --request GET \
  --url https://api.spotify.com/v1/users/smedjan/playlists \
  --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
  */