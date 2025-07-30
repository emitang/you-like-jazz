import requests
import json
import secrets
import gettoken
import pandas as pd

token = gettoken.get_token()

headers = {'Content-type': 'application/json', 'Authorization': token['token_type'] + ' ' + token['access_token']}

url = 'https://api.spotify.com/v1/users/' + secrets.username + '/playlists'
response = requests.get(url, headers=headers)

# Check if the response is successful
if response.status_code == 200:
    data = response.json()['items']
    df = pd.DataFrame(data = data)
    df = df[['name', 'tracks', 'uri']]
else:
    print("error!")

print(df)

# let token = await getToken();
    # // console.log(token.token_type + ' ' + token.access_token)
    # const response = await fetch('https://api.spotify.com/v1/users/' + secret.username + '/playlists', {
    #   method: 'GET',
    #   headers: {
    #     'Content-Type': 'application/json',
    #     'Authorization': token.token_type + ' ' + token.access_token
    #   },
    #   //body: body
    # });
    # const results = await response.json();
    # //console.log(data);
    # return results.items;