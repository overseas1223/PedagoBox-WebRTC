# pip3 install requests
import requests
import json

API_KEY = "pedagobox_default_secret"
PEDAGOBOX_URL = "https://pe.pedagobox.com/api/v1/meeting"
# PEDAGOBOX_URL = "http://localhost:3010/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    PEDAGOBOX_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
