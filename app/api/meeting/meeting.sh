#!/bin/bash

API_KEY="pedagobox_default_secret"
PEDAGOBOX_URL="https://pe.pedagobox.com/api/v1/meeting"
# PEDAGOBOX_URL="http://localhost:3010/api/v1/meeting"

curl $PEDAGOBOX_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST