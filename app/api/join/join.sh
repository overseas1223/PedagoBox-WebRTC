#!/bin/bash

API_KEY="pedagobox_default_secret"
PEDAGOBOX_URL="https://pe.pedagobox.com/api/v1/join"
# PEDAGOBOX_URL="http://localhost:3010/api/v1/join"

curl $PEDAGOBOX_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --data '{"room":"test","password":"false","name":"pedagobox","audio":"true","video":"true","screen":"false","notify":"true"}' \
    --request POST