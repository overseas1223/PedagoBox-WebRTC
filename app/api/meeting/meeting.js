'use strict';

async function getMeeting() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY = 'pedagobox_default_secret';
        const PEDAGOBOX_URL = 'https://pe.pedagobox.com/api/v1/meeting';
        // const PEDAGOBOX_URL = 'http://localhost:3010/api/v1/meeting';

        const response = await fetch(PEDAGOBOX_URL, {
            method: 'POST',
            headers: {
                authorization: API_KEY,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            console.log('meeting:', data.meeting);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMeeting();
