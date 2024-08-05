// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  const data = {
    email_address: email,
    status: 'subscribed', // Use 'pending' for double opt-in
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
      res.status(response.status).json({ error: 'Failed to subscribe user.' });
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.data || error.message);
    res.status(500).json({ error: 'An error occurred while subscribing.' });
  }
}
