// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `apikey ${MAILCHIMP_API_KEY}`,
  };

  try {
    const response = await axios.post(url, data, { headers });

    if (response.status === 200 || response.status === 201) {
      res.status(200).json({ success: true });
    } else {
      console.error('Unexpected response:', response.data);
      res.status(response.status).json({ error: 'Failed to subscribe user.' });
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.data || error.message);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    }

    // Handle specific Mailchimp errors
    if (error.response?.data?.title === 'Member Exists') {
      res.status(400).json({ error: 'User already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while subscribing.' });
    }
  }
}
