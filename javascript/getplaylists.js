import {secret} from './secrets.js';
import {getToken} from './gettoken.js';


  async function getPlaylist() {
    let token = await getToken();
    // console.log(token.token_type + ' ' + token.access_token)
    const response = await fetch('https://api.spotify.com/v1/users/' + secret.username + '/playlists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.token_type + ' ' + token.access_token
      },
      //body: body
    });
    const results = await response.json();
    //console.log(data);
    return results.items;
  }
  
  let result = await getPlaylist().catch(console.error);
  //console.log(result);
  //console.log(result[1]);
  //console.log(result[1].tracks);
  //
  

// curl command from spotify for reference
/*
curl --request GET \
  --url https://api.spotify.com/v1/users/smedjan/playlists \
  --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
  */