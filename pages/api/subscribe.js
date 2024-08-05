// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const data = {
    email_address: email,
    status: 'subscribed', // Use 'pending' for double opt-in if needed
  };

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

  // Constructing the correct URL with the server prefix and audience ID
  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `apikey ${MAILCHIMP_API_KEY}`,
  };

  try {
    const response = await axios.post(url, data, { headers });

    if (response.status === 200 || response.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Unexpected Mailchimp response:', response.data);
      return res.status(response.status).json({ error: 'Failed to subscribe user.' });
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.data || error.message);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('No response received from Mailchimp');
    }

    // Handle specific Mailchimp errors
    if (error.response?.data?.title === 'Member Exists') {
      return res.status(400).json({ error: 'User already exists' });
    } else {
      return res.status(500).json({ error: 'An error occurred while subscribing.' });
    }
  }
}
