import requests
import json
import secrets

def get_token(): 
    headers = {'Content-type': 'application/x-www-form-urlencoded'}

    data = 'grant_type=client_credentials&client_id=' + secrets.client_id + '&client_secret=' + secrets.client_secret

    url = "https://accounts.spotify.com/api/token"
    response = requests.post(url, headers=headers, data=data)

    # Check if the response is successful
    if response.status_code == 200:
        token = response.json()
    else:
        print("error!")

    print(token)
    return token

get_token()