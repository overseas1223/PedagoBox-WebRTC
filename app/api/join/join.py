# pip3 install requests
import requests
import json

API_KEY = "pedagobox_default_secret"
PEDAGOBOX_URL = "https://pe.pedagobox.com/api/v1/join"
# PEDAGOBOX_URL = "http://localhost:3010/api/v1/join"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

data = {
    "room": "test",
    "password": "false",
    "name": "pedagobox",
    "audio": "true",
    "video": "true",
    "screen": "true",
    "notify": "true",
}

response = requests.post(
    PEDAGOBOX_URL,
    headers=headers,
    json=data,
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("join:", data["join"])
